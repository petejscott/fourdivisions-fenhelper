'use strict';

QUnit.test( "urlLib.getUrlParams - when URL contains ?foo=bar, urlParams['foo'] returns 'bar'", function (assert)
{
	var sut = {
		search : '?foo=bar'
	};
	var urlParams = urlLib.getUrlParams(sut);
	
	assert.ok( urlParams["foo"] === "bar" );
});

QUnit.test( "urlLib.getUrlParams - when URL contains ?foo=bar&bar=baz, urlParams['foo'] returns 'bar'", function (assert)
{
	var sut = {
		search : '?foo=bar&bar=baz'
	};
	var urlParams = urlLib.getUrlParams(sut);
	
	assert.ok( urlParams["foo"] === "bar" );
});

QUnit.test( "urlLib.getUrlParams - when URL contains ?foo=bar&bar=baz, urlParams['bar'] returns 'baz'", function (assert)
{
	var sut = {
		search : '?foo=bar&bar=baz'
	};
	var urlParams = urlLib.getUrlParams(sut);
	
	assert.ok( urlParams["bar"] === "baz" );
});