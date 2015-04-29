// Uses AngularJS - https://github.com/angular/angular.js

var module = angular.module('pokemon', []);

module.controller('PokemonController', function($scope) {
	$scope.helloWorld = "hi";
});