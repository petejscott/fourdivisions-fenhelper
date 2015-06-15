'use strict';

; var urlLib = (function() {
	
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
	
	return {
		getUrlParams : getUrlParams
	}
	
})();