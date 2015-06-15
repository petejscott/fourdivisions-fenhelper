'use strict';

; var pieceDragHandler = (function(fenMaker, urlLib) {

    var draggable = null;
    var dragSourceElement = null;

    function handleDragStart(e)
    {
        if (this.firstChild == null) return;

        this.style.opacity = '0.5';
        dragSourceElement = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragEnd(e)
    {
        this.style.opacity = '1';
        visitDraggables(function (square) {
            square.classList.remove("dragover");
        })
    }

    function handleDragOver(e)
    {
        e.preventDefault(); 
        e.dataTransfer.dropEffect = 'move';
        return false;
    }

    function handleDragEnter(e)
    {
        this.classList.add('dragover');
    }

    function handleDragLeave(e)
    {
        this.classList.remove('dragover');
    }

    function handleDrop(e)
    {
        e.stopPropagation();
        if (dragSourceElement != this)
        {
            dragSourceElement.innerHTML = ''; // empty the source square
            var piece = dragSourceElement.getAttribute('data-piece');
            dragSourceElement.setAttribute('data-piece', '');

            this.innerHTML = e.dataTransfer.getData('text/html'); // fill the target square
            this.setAttribute('data-piece', piece);

            //var sourceIndex = dragSourceElement.getAttribute('data-index');
            //var destinationIndex = this.getAttribute('data-index');
            //moveHandler.makeMove(sourceIndex, destinationIndex);

            // get the original notation
            var originalNotation = null;
            var originalNotationElement = document.querySelector("#originalNotation");
            if (originalNotationElement)
            {
                originalNotation = originalNotationElement.value;
            }
            // get the board
            var board = document.querySelector(".game .board");
            fenMaker.makeFen(originalNotation, board, handleFenOutput);
        }

        visitDraggables(resetOccupiedState);

        return false;
    }
	
    function handleFenOutput(fen) {
		var urlParams = urlLib.getUrlParams(window.location);
		var url = window.location.href.replace(window.location.search, "");
		url += "?fen=" + fen;
		window.location.href = url;		
    }

    function visitDraggables(visit)
    {
        for (var i = 0; i < draggable.length; ++i)
        {
            visit(draggable[i]);
        }
    }

    function resetOccupiedState(square)
    {
        square.classList.remove("occupied");
        if (square.firstChild !== null)
        {
            square.classList.add("occupied");
        }
    }

    function bindDragEventHandlers(square)
    {
        square.addEventListener('dragstart', handleDragStart, false);
        square.addEventListener('dragend', handleDragEnd, false);
        square.addEventListener('dragover', handleDragOver, false);
        square.addEventListener('dragenter', handleDragEnter, false);
        square.addEventListener('dragleave', handleDragLeave, false);
        square.addEventListener('drop', handleDrop, false);
    }

    function init()
    {
        draggable = document.querySelectorAll('.square[draggable]');
        visitDraggables(bindDragEventHandlers);
    }
	
	return { init : init };
	

})(fenMaker, urlLib);