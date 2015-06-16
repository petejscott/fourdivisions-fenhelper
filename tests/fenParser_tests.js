'use strict';

var FEN_DEFAULT_VALUE = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

QUnit.test( "fenParser.parse - when valid fen is provided, piece array has length of 64", function (assert)
{
	var fen = FEN_DEFAULT_VALUE;
	var game = fenParser.parse(fen);
	
	assert.ok( game.pieceArray.length === 64 );
});