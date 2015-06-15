'use strict';

; var pieceMapper = (function() {
	
	var PIECE_UNC_BLACK_PAWN = "&#9823;";
	var PIECE_UNC_BLACK_ROOK = "&#9820;";
	var PIECE_UNC_BLACK_KNIGHT = "&#9822;";
	var PIECE_UNC_BLACK_BISHOP = "&#9821;";
	var PIECE_UNC_BLACK_QUEEN = "&#9819;";
	var PIECE_UNC_BLACK_KING = "&#9818;";

	var PIECE_UNC_WHITE_PAWN = "&#9817;";
	var PIECE_UNC_WHITE_ROOK = "&#9814;";
	var PIECE_UNC_WHITE_KNIGHT = "&#9816;";
	var PIECE_UNC_WHITE_BISHOP = "&#9815;";
	var PIECE_UNC_WHITE_QUEEN = "&#9813;";
	var PIECE_UNC_WHITE_KING = "&#9812;";
	
	var PIECE_ASC_BLACK_PAWN = "p";
	var PIECE_ASC_BLACK_ROOK = "r";
	var PIECE_ASC_BLACK_KNIGHT = "n";
	var PIECE_ASC_BLACK_BISHOP = "b";
	var PIECE_ASC_BLACK_QUEEN = "q";
	var PIECE_ASC_BLACK_KING = "k";

	var PIECE_ASC_WHITE_PAWN = "P";
	var PIECE_ASC_WHITE_ROOK = "R";
	var PIECE_ASC_WHITE_KNIGHT = "N";
	var PIECE_ASC_WHITE_BISHOP = "B";
	var PIECE_ASC_WHITE_QUEEN = "Q";
	var PIECE_ASC_WHITE_KING = "K";
	
	function mapToUnicode(piece) {
		if (piece == '') return piece;
		switch (piece)
		{
			case PIECE_ASC_BLACK_ROOK:
				return PIECE_UNC_BLACK_ROOK;
			case PIECE_ASC_BLACK_BISHOP:
				return PIECE_UNC_BLACK_BISHOP;
			case PIECE_ASC_BLACK_KNIGHT:
				return PIECE_UNC_BLACK_KNIGHT;
			case PIECE_ASC_BLACK_QUEEN:
				return PIECE_UNC_BLACK_QUEEN;
			case PIECE_ASC_BLACK_KING:
				return PIECE_UNC_BLACK_KING;
			case PIECE_ASC_BLACK_PAWN:
				return PIECE_UNC_BLACK_PAWN;
			case PIECE_ASC_WHITE_ROOK:
				return PIECE_UNC_WHITE_ROOK;
			case PIECE_ASC_WHITE_BISHOP:
				return PIECE_UNC_WHITE_BISHOP;
			case PIECE_ASC_WHITE_KNIGHT:
				return PIECE_UNC_WHITE_KNIGHT;
			case PIECE_ASC_WHITE_QUEEN:
				return PIECE_UNC_WHITE_QUEEN;
			case PIECE_ASC_WHITE_KING:
				return PIECE_UNC_WHITE_KING;
			case PIECE_ASC_WHITE_PAWN:
				return PIECE_UNC_WHITE_PAWN;
			default:
				return '';
		}
	}
	
	function mapToAscii(piece) {
		if (piece == '') return piece;
		switch (piece)
		{
			case PIECE_UNC_BLACK_ROOK:
				return PIECE_ASC_BLACK_ROOK;
			case PIECE_UNC_BLACK_BISHOP:
				return PIECE_ASC_BLACK_BISHOP;
			case PIECE_UNC_BLACK_KNIGHT:
				return PIECE_ASC_BLACK_KNIGHT;
			case PIECE_UNC_BLACK_QUEEN:
				return PIECE_ASC_BLACK_QUEEN;
			case PIECE_UNC_BLACK_KING:
				return PIECE_ASC_BLACK_KING;
			case PIECE_UNC_BLACK_PAWN:
				return PIECE_ASC_BLACK_PAWN;
			case PIECE_UNC_WHITE_ROOK:
				return PIECE_ASC_WHITE_ROOK;
			case PIECE_UNC_WHITE_BISHOP:
				return PIECE_ASC_WHITE_BISHOP;
			case PIECE_UNC_WHITE_KNIGHT:
				return PIECE_ASC_WHITE_KNIGHT;
			case PIECE_UNC_WHITE_QUEEN:
				return PIECE_ASC_WHITE_QUEEN;
			case PIECE_UNC_WHITE_KING:
				return PIECE_ASC_WHITE_KING;
			case PIECE_UNC_WHITE_PAWN:
				return PIECE_ASC_WHITE_PAWN;
			default:
				return '';
		}
	}
	
	return {
		mapToUnicode : mapToUnicode,
		mapToAscii : mapToAscii
	};
	
})();