'use strict';

; (function(fenParser, pieceDragHandler, urlLib, gameStorage, gameHandler) {
	
	var FEN_DEFAULT_VALUE = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
	
	function init() {
		var urlParams = urlLib.getUrlParams(window.location);
		var fen = urlParams["fen"];
		if (typeof(fen) === 'undefined' || fen.length === 0) {
			var url = window.location.href.replace(window.location.search, "");
			url += "?fen=" + FEN_DEFAULT_VALUE;
			window.location.href = url;
		} else {
			submitFen(fen);
		}
		
		gameHandler.init();
	}
	
	function submitFen(inputFen) {		
		var boardContainer = document.querySelector(".board");
		var gameDataContainer = document.querySelector(".gameData");
		var originalNotationElement = document.querySelector("#originalNotation");
		originalNotationElement.value = inputFen;
		
		var game = fenParser.parse(inputFen);
		boardContainer.innerHTML = makeBoardHtml(game.pieceArray);
		gameDataContainer.innerHTML = makeGameDataHtml(game.gameData);
		pieceDragHandler.init();
	}
	
	function makeGameDataHtml(gameData) {
		console.log(gameData);
		var html = "<p>Note that only ActiveTurn and Number of Full Moves are accurately represented at present.</p>";
		html += "<ul>";
		html += "<li>ActiveTurn: " + gameData.ActiveTurn + "</li>";
		html += "<li>Available Castling: " + gameData.Castling + "</li>";
		html += "<li>EnPassant Target: " + gameData.EnPassant + "</li>";
		html += "<li>Half Moves (since last capture): " + gameData.HalfMoveClock + "</li>";
		html += "<li>Number of Full Moves: " + gameData.FullMoveCount + "</li>";
		html += "</ul>";
		return html;
	}
	
	function makeBoardHtml(pieceArray) {
		
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
		
		return html;
	}
	
	init();
	
})(fenParser, pieceDragHandler, urlLib, gameStorage, gameHandler);