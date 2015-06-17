'use strict';

function clearStorage() {
	localStorage.clear();
}

clearStorage(); // clear storage before running any tests

QUnit.test( "makeGuid returns something rather unique and much like a guid", function (assert)
{
	var guid1 = gameStorage.makeGuid();
	var guid2 = gameStorage.makeGuid();
	
	assert.ok( guid1 !== guid2 );
	assert.ok( guid1.length === 36 );
	
	clearStorage();
});

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

QUnit.test( "when two new games are saved, loadGameIds returns both game ids", function (assert)
{
	var randomGameId1 = "randomGameId1";
	var randomGameId2 = "randomGameId2";
	var game = {};
	
	gameStorage.saveGame(randomGameId1, game);
	gameStorage.saveGame(randomGameId2, game);
	
	var gameIds = gameStorage.loadGameIds();
	assert.ok( gameIds.length === 2 );
	assert.ok( gameIds[0] === "randomGameId1" );
	
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