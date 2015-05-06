// Uses AngularJS - https://github.com/angular/angular.js

var module = angular.module('pokemon', []);

module.controller('PokemonController', function($scope) {
	var standardWidth = 150
	$scope.pokemon = [
		// chart
		{
			url: 'http://pad3.whstatic.com/images/d/d7/Pokemon-Weaknesses-Chart.png',
			title: 'Chart',
			width: '100%'
		},
		// pokemon
		{
			url: 'http://ts1.mm.bing.net/th?id=JN.zEV%2bakvqqM%2fCaB67QNVjUg&amp;pid=15.1',
			title: 'Psychic',
			width: standardWidth
		},
		{
			url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTxRjt6E645ROOZftg7cL4gCoox_JPzhCJQTa6Bi1dZMn9ju8720Q',
			title: 'Fire',
			width: standardWidth
		},
		{
			url: 'http://cdn.bulbagarden.net/upload/f/f1/382Kyogre-Primal.png',
			title: 'Water',
			width: standardWidth
		},
		{
			url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdoDyKHqXd46TsC-l5_aXKkd9WLTxsxWPqWcNdiXFNnId3Ft1K',
			title: 'Ground',
			width: standardWidth
		},
		{
			url: 'http://img.pokemondb.net/artwork/yveltal.jpg',
			title: 'Dark',
			width: standardWidth
		},
		{
			url: 'http://pokemonlegends.informe.com/gallery/130-1/celebi.png',
			title: 'Grass',
			width: standardWidth
		},
		// breaking point for regular pokemon
		{
			url: 'flareasect.png',
			title: 'Flareasect',
			width: standardWidth
		}
	];
});