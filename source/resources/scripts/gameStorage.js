'use strict';

; var gameStorage = (function() {
	
	var GAME_STORAGE_KEY = "fourdivisionsfengames";
	
	function loadGameIds() {
		var sGameIds = localStorage.getItem(GAME_STORAGE_KEY);
		if (sGameIds === null) return new Array();
		return JSON.parse(sGameIds);
	}
	
	function addGameIdToGameIds(id) {
		var gameIds = loadGameIds();
		if (!gameIds.some(function(e) { e === id })) {
			gameIds.push(id);
		}
		localStorage.setItem(GAME_STORAGE_KEY, JSON.stringify(gameIds));
	}
	
	function loadGame(id) {
		var sGame = localStorage.getItem(id);
		if (sGame === null) return null;
		return JSON.parse(sGame);
	}
	
	function saveGame(id, game) {
		localStorage.setItem(id, JSON.stringify(game));
		addGameIdToGameIds(id);
	}
	
	function save(id, fen) {
		var gamesFromStorage = localStorage.getItem(GAME_STORAGE_KEY);
		var games = JSON.parse(gamesFromStorage);
		games[id] = fen;
		var gamesToStorage = JSON.stringify(games);
		localStorage.setItem(GAME_STORAGE_KEY, gamesToStorage);
	}
	
	function makeGuid() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
			return v.toString(16);
		});
	}
	
	return {
		loadGameIds : loadGameIds,
		loadGame : loadGame,
		saveGame : saveGame,
		makeGuid : makeGuid
	}
	
})();