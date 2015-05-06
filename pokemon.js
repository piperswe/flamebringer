// Uses AngularJS - https://github.com/angular/angular.js

var module = angular.module('pokemon', []);

module.controller('PokemonController', function($scope) {
	$scope.pokemon = [
		{
			url: 'http://fc06.deviantart.net/fs70/i/2010/291/0/1/pokemon_type_chart_by_benjamoid-d30zwry.png',
			title: 'Chart'
		}
	];
});