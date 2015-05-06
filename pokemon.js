// Uses AngularJS - https://github.com/angular/angular.js

var module = angular.module('pokemon', []);

module.controller('PokemonController', function($scope) {
	$scope.pokemon = [
		// chart
		{
			url: 'http://fc06.deviantart.net/fs70/i/2010/291/0/1/pokemon_type_chart_by_benjamoid-d30zwry.png',
			title: 'Chart'
		},
		// pokemon
		{
			url: 'http://ts1.mm.bing.net/th?id=JN.zEV%2bakvqqM%2fCaB67QNVjUg&amp;pid=15.1',
			title: 'Psychic'
		},
		{
			url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTxRjt6E645ROOZftg7cL4gCoox_JPzhCJQTa6Bi1dZMn9ju8720Q',
			title: 'Fire'
		},
		{
			url: 'http://cdn.bulbagarden.net/upload/f/f1/382Kyogre-Primal.png',
			title: 'Water'
		},
		{
			url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdoDyKHqXd46TsC-l5_aXKkd9WLTxsxWPqWcNdiXFNnId3Ft1K',
			title: 'Ground'
		},
		{
			url: 'http://img.pokemondb.net/artwork/yveltal.jpg',
			title: 'Dark'
		},
		{
			url: 'http://pokemonlegends.informe.com/gallery/130-1/celebi.png',
			title: 'Grass'
		},
		// breaking point for regular pokemon
		{
			url: 'flareasect.png',
			title: 'Flareasect'
		}
	];
});