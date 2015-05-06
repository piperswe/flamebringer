// Uses AngularJS - https://github.com/angular/angular.js

var module = angular.module('pokemon', []);

module.controller('PokemonController', function($scope) {
	$scope.pokemon = [
		{
			url: 'http://fc06.deviantart.net/fs70/i/2010/291/0/1/pokemon_type_chart_by_benjamoid-d30zwry.png',
			title: 'Chart'
		},
		{
			url: 'http://ts1.mm.bing.net/th?id=JN.zEV%2bakvqqM%2fCaB67QNVjUg&amp;pid=15.1',
			title: 'Psychic'
		},
		{
			url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTxRjt6E645ROOZftg7cL4gCoox_JPzhCJQTa6Bi1dZMn9ju8720Q',
			title: 'Fire'
		},
		{
			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtIscSvUkunDrsQQPNqM80DHPfLcMWbbeGus_4z8sW-2pNMhSjgw"',
			title: 'Water'
		}
	];
});