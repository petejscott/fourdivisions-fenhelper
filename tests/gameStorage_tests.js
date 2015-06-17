'use strict';

function clearStorage() {
	localStorage.clear();
}

clearStorage(); // clear storage before running any tests

QUnit.test( "when storage is clear, loadGameIds returns empty array", function (assert)
{
	var gameIds = gameStorage.loadGameIds();
	assert.ok( gameIds.length === 0 );
	
	clearStorage();
});

QUnit.test( "when a new game is saved, loadGameIds returns that game id", function (assert)
{
	var randomGameId = "randomGameId";
	var game = {};
	
	gameStorage.saveGame(randomGameId, game);
	
	var gameIds = gameStorage.loadGameIds();
	assert.ok( gameIds.length === 1 );
	assert.ok( gameIds[0] === "randomGameId" );
	
	clearStorage();
});

QUnit.test( "loadGame returns the requested game", function (assert)
{
	var randomGameId = "randomGameId";
	var game = { "someProperty" : "someValue" };
	
	gameStorage.saveGame(randomGameId, game);
	
	var game = gameStorage.loadGame(randomGameId);
	assert.ok( game !== null );
	assert.ok( game.someProperty === "someValue" );
	
	clearStorage();
});