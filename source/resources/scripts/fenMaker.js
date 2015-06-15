'use strict';

; var fenMaker = (function () {

    function makeFen(originalNotation, boardElement, callback) {
        var piecePart = makeFenPiecePart(boardElement);
        var statePart = makeFenStatePart(originalNotation);
        var fen = piecePart + " " + statePart;
        if (callback) callback(fen);
    }
    function makeFenPiecePart(boardElement) {

        // loop over the rendered board...
        var rows = boardElement.querySelectorAll(".row");

        var fen = "";
        for (var ri = 0; ri < rows.length; ri++)
        {
            var row = rows[ri];
            var emptySquares = 0;
            var squares = row.querySelectorAll(".square");
            for (var si = 0; si < squares.length; si++)
            {
                var square = squares[si];
                var piece = square.getAttribute("data-piece");
                if (piece.length == 0)
                {
                    emptySquares++;
                }
                else
                {
                    if (emptySquares > 0) {
                        fen += emptySquares;
                        emptySquares = 0;
                    }
                    fen += piece;
                }

                if (si == (squares.length - 1))
                {
                    if (emptySquares > 0) fen += emptySquares;
                }
            }
            if (ri < (rows.length - 1)) fen += "/";
        }
        return fen;
    }
    //TODO: this be UGLY, son
    function makeFenStatePart(originalNotation)
    {
        var i = originalNotation.indexOf(' ');
        var fen = originalNotation.substr(i).trim();

        var parts = fen.split(' ');
        if (parts.length == 0) return fen;

        var newFen = '';
        // active turn
        if (parts.length > 0)
        {
            if (parts[0].trim() == 'w')
            {
                newFen += 'b';
            }
            else 
            {
                newFen += 'w';
            }
            newFen += ' ';
        }
        // castling
        if (parts.length > 1)
        {
            newFen += parts[1];
            newFen += ' ';
        }
        // enpassant
        if (parts.length > 2)
        {
            newFen += parts[2];
            newFen += ' ';
        }
        // half move clock
        if (parts.length > 3)
        {
            newFen += parts[3];
            newFen += ' ';
        }
        // move count
        if (parts.length > 4)
        {
            // this is incremented after black makes a 
            // move, so if parts[0] == b and newFen 
            // starts with a w, then increment it.
            if (parts[0] == 'b' && newFen.substr(0, 1) == 'w')
            {
                newFen += parseFloat(parts[4]) + 1;
            }
            else 
            {
                newFen += parts[4];
            }
            newFen += ' ';
        }
        return newFen.trim();
    }

    return {
        makeFen: makeFen
    }

})();