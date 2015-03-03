	// create the module and name it scotchApp
	var darwin = angular.module('darwin', ['ngRoute', 'ngAnimate']);

	// configure our routes
	darwin.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController',
			})

			.when('/peru', {
				templateUrl : 'pages/peru.html',
				controller  : 'peru',
			})

			.when('/capeverde', {
				templateUrl : 'pages/capeverd.html',
				controller  : 'capeverd',
			})

			.when('/riodejaneiro', {
				templateUrl : 'pages/riodejaneiro.html',
				controller  : 'riodejaneiro',
			})

			.when('/santacruz', {
				templateUrl : 'pages/santacruz.html',
				controller  : 'santacruz',
			})

			.when('/straitofmagellan', {
				templateUrl : 'pages/straitofmagellan.html',
				controller  : 'straitofmagellan',
			})

			.when('/tahitinewzealand', {
				templateUrl : 'pages/tahitinewzealand.html',
				controller  : 'tahitinewzealand',
			})

			.when('/tierradelfuego', {
				templateUrl : 'pages/tierradelfuego.html',
				controller  : 'tierradelfuego',
			});

	});

	darwin.controller('mainController', function($scope) {
		$scope.message = 'Home';
		$scope.pageClass = 'page-home';
	});

	darwin.controller('peru', function($scope) {
		$scope.message = 'Peru';
		$scope.pageClass = 'page-peru';
	});

	darwin.controller('capeverd', function($scope) {
		$scope.message = 'Cape de Verd Islands';
		$scope.title = 'Cape de Verd Islands';
		$scope.pageClass = 'page-capeverd';
	});

	darwin.controller('riodejaneiro', function($scope) {
		$scope.message = 'Rio de Janeiro';
		$scope.pageClass = 'page-rio';
	});

	darwin.controller('santacruz', function($scope) {
		$scope.message = 'Santa Cruz';
		$scope.pageClass = 'page-sc';
	});

	darwin.controller('straitofmagellan', function($scope) {
		$scope.message = 'Strait of Magellan';
		$scope.pageClass = 'page-som';
	});

	darwin.controller('tahitinewzealand', function($scope) {
		$scope.message = 'Tahiti and New Zealand';
		$scope.pageClass = 'page-tz';
	});

	darwin.controller('tierradelfuego', function($scope) {
		$scope.message = 'Tierra Del Fuego';
		$scope.pageClass = 'page-tdf';
	});



















