'use strict';

; var gameHandler = (function(gameStorage) {
	
	function init() {
		renderSavedGames();
		var importButton = document.querySelector("#importSavedGame");
		var importField = document.querySelector("#savedGameImportField");
		importButton.addEventListener("click", function(e) {
			if (importField.classList.contains("hidden")) {
				importField.classList.remove("hidden");
			} else { 
				var sGame = null;
				try {
					sGame = JSON.parse(importField.value);
				}
				catch (e) {
					alert("Invalid Game Data");
				}
				if (sGame !== null) {
					var id = gameStorage.makeGuid();
					gameStorage.saveGame(id, sGame);
				}
				importField.classList.add("hidden");
				renderSavedGames();
			}
		}, false);
	}	
	
	function renderSavedGames() {
		var gameContainer = document.querySelector(".savedGames");
		var gameIds = gameStorage.loadGameIds();
		if (gameIds.length > 0) {
			gameContainer.innerHTML = makeSavedGameHtml(gameIds);
		} else {
			gameContainer.innerHTML = "<li>No saved games exist</li>";
		}
	}
	
	function makeSavedGameHtml(gameIds) {
		var html = "";
		for (var i = 0; i < gameIds.length; i++) {
			html += "<li>" + gameIds[i] + "</li>";
		}
		return html;
	}
	
	return {
		init : init
	}
	
})(gameStorage);