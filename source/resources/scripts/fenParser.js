'use strict';

; var fenParser = (function(pieceMapper) {
	
	function parse(fen) {
				
		var fenPiecePart = getPiecePart(fen);
		var fenGamePart = getGamePart(fen);
		
		var game = {
			originalFen : fen,
			pieceArray : makePieceArray(fenPiecePart),
			gameData : makeGameData(fenGamePart)
		};
		return game;
	}
	
	function getPiecePart(fen) {
		var parts = fen.split(' ', 1);
		return parts[0].trim();
	}
	function getGamePart(fen) {
		var parts = fen.split(' ');
		return fen.replace(parts[0], '').trim();
	}
	
	function makePieceArray(fen) {
		
		var pieces = new Array();
		
		for(var i = 0; i < fen.length; i++) {
			
			var character = fen[i];
			
			var piece = {
				ascii : character,
				unicode : pieceMapper.mapToUnicode(character)
			};
			
			if (typeof(character) === 'undefined' || character == "/") {
				continue;
			} else if ("0123456789".indexOf(character) >= 0) {
				var numSpaces = parseInt(character);
				for (var x = 0; x < numSpaces; x++) {
					pieces.push({ ascii : '', unicode : ''});
				}
			} else {
				pieces.push(piece);
			}
		}
		
		return pieces;
	}
	
	function makeGameData(fen) {
		return { 
			"ActiveTurn" : "w",
			"EnPassant" : "-",
			"Castling" : "KQkq",
			"HalfMoveCount" : 0,
			"FullMoves" : 1
		}
	}
	
	return {
		parse : parse 
	};
	
})(pieceMapper);