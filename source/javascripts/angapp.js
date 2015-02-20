	// create the module and name it scotchApp
	var darwin = angular.module('darwin', ['ngRoute']);

	// configure our routes
	darwin.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			.when('/peru', {
				templateUrl : 'pages/peru.html',
				controller  : 'peru'
			})

			.when('/riodejaneiro', {
				templateUrl : 'pages/riodejaneiro.html',
				controller  : 'riodejaneiro'
			})

			.when('/santacruz', {
				templateUrl : 'pages/santacruz.html',
				controller  : 'santacruz'
			})

			.when('/straitofmagellan', {
				templateUrl : 'pages/straitofmagellan.html',
				controller  : 'straitofmagellan'
			})

			.when('/tahitinewzealand', {
				templateUrl : 'pages/tahitinewzealand.html',
				controller  : 'tahitinewzealand'
			})

			.when('/tierradelfuego', {
				templateUrl : 'pages/tierradelfuego.html',
				controller  : 'tierradelfuego'
			});

	});

	darwin.controller('mainController', function($scope) {
		$scope.message = 'Home';
	});

	darwin.controller('peru', function($scope) {
		$scope.message = 'Peru';
	});

	darwin.controller('riodejaneiro', function($scope) {
		$scope.message = 'Rio de Janeiro';
	});

	darwin.controller('santacruz', function($scope) {
		$scope.message = 'Santa Cruz';
	});

	darwin.controller('straitofmagellan', function($scope) {
		$scope.message = 'Strait of Magellan';
	});

	darwin.controller('tahitinewzealand', function($scope) {
		$scope.message = 'Tahiti and New Zealand';
	});

	darwin.controller('tierradelfuego', function($scope) {
		$scope.message = 'Tierra Del Fuego';
	});


















