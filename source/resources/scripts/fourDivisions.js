'use strict';

; (function(fenParser, pieceDragHandler) {
	
	var FEN_DEFAULT_VALUE = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
	
	function init() {
				
		var urlParams = getUrlParams(window.location);
		
		if (urlParams) {
			var fen = urlParams["fen"];
			if (typeof(fen) === 'undefined' || fen.length === 0) {
				var url = window.location.href.replace(window.location.search, "");
				url += "?fen=" + FEN_DEFAULT_VALUE;
				window.location.href = url;
			} else {
				submitFen(fen);
			}
		}
	}
	
	function getUrlParams(url) {
		var match;
		var pl = /\+/g; 
        var search = /([^&=]+)=?([^&]*)/g;
		var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
        var query  = url.search.substring(1);
		var urlParams = {};
		while (match = search.exec(query)) {
		   urlParams[decode(match[1])] = decode(match[2]);
		}
		return urlParams;
	}
	
	function submitFen(inputFen) {		
		var boardContainer = document.querySelector(".board");
		var originalNotationElement = document.querySelector("#originalNotation");
		originalNotationElement.value = inputFen;
		
		var game = fenParser.parse(inputFen);
		makeBoardHtml(boardContainer, game.pieceArray);
		pieceDragHandler.init();
	}
	
	function makeBoardHtml(board, pieceArray) {
		
		var html = "";
		
		var squareCount = 0;
		for (var i = 0; i < pieceArray.length; i++)
		{
			if (squareCount == 0)
			{
				html += "<div class='row'>";
			}
			
			html += "<span draggable='true' class='square' title='" + i + "' data-index='" + i + "' data-piece='" + pieceArray[i].ascii + "'><span class='piece'>" + pieceArray[i].unicode + "</span></span>";
			
			if (squareCount == 7)
			{
				html += "</div>";
				squareCount = 0;
			}
			else 
			{
				squareCount++;
			}
		}
		
		board.innerHTML = html;
	}
	
	init();
	
})(fenParser, pieceDragHandler);