	var darwin = angular.module('darwin', ['ngRoute', 'ngAnimate']);

	// configure our routes
	darwin.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController',
			})

			.when('/start', {
				templateUrl : 'pages/start.html',
				controller  : 'start',
			})

			.when('/australia', {
				templateUrl : 'pages/australia.html',
				controller  : 'australia',
			})

			.when('/bahiablanca', {
				templateUrl : 'pages/bahiablanca.html',
				controller  : 'bahiablanca',
			})

			.when('/bandaoriental', {
				templateUrl : 'pages/bandaoriental.html',
				controller  : 'bandaoriental',
			})

			.when('/buenosayres', {
				templateUrl : 'pages/buenosayres.html',
				controller  : 'buenosayres',
			})

			.when('/capeverde', {
				templateUrl : 'pages/capeverd.html',
				controller  : 'capeverd',
			})

			.when('/chile', {
				templateUrl : 'pages/chile.html',
				controller  : 'chile',
			})

			.when('/chiloe', {
				templateUrl : 'pages/chiloe.html',
				controller  : 'chiloe',
			})

			.when('/concepcion', {
				templateUrl : 'pages/concepcion.html',
				controller  : 'concepcion',
			})

			.when('/coral', {
				templateUrl : 'pages/coral.html',
				controller  : 'coral',
			})

			.when('/cordillera', {
				templateUrl : 'pages/cordillera.html',
				controller  : 'cordillera',
			})

			.when('/falklandislands', {
				templateUrl : 'pages/falklandislands.html',
				controller  : 'falklandislands',
			})

			.when('/galapagos', {
				templateUrl : 'pages/galapagos.html',
				controller  : 'galapagos',
			})

			.when('/maldonado', {
				templateUrl : 'pages/maldonado.html',
				controller  : 'maldonado',
			})

			.when('/mauritius', {
				templateUrl : 'pages/mauritius.html',
				controller  : 'mauritius',
			})

			.when('/peru', {
				templateUrl : 'pages/peru.html',
				controller  : 'peru',
			})

			.when('/rionegro', {
				templateUrl : 'pages/rionegro.html',
				controller  : 'rionegro',
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

			.when('/tahiti', {
				templateUrl : 'pages/tahiti.html',
				controller  : 'tahiti',
			})

			.when('/tierradelfuego', {
				templateUrl : 'pages/tierradelfuego.html',
				controller  : 'tierradelfuego',
			})
	});

	darwin.controller('mainController', function($scope) {
		$scope.pageClass = 'page-home';
	});

	darwin.controller('start', function($scope) {
		$scope.pageClass = 'page-start';
	});

	darwin.controller('australia', function($scope) {
		$scope.pageClass = 'page-australia';
	});

	darwin.controller('bahiablanca', function($scope) {
		$scope.pageClass = 'page-bahiablanca';
	});

	darwin.controller('bandaoriental', function($scope) {
		$scope.pageClass = 'page-bandaoriental';
	});

	darwin.controller('buenosayres', function($scope) {
		$scope.pageClass = 'page-buenosayres';
	});

	darwin.controller('capeverd', function($scope) {
		$scope.pageClass = 'page-capeverd';
	});

	darwin.controller('chile', function($scope) {
		$scope.pageClass = 'page-chile';
	});

	darwin.controller('chiloe', function($scope) {
		$scope.pageClass = 'page-chiloe';
	});

	darwin.controller('concepcion', function($scope) {
		$scope.pageClass = 'page-concepcion';
	});

	darwin.controller('coral', function($scope) {
		$scope.pageClass = 'page-coral';
	});

	darwin.controller('cordillera', function($scope) {
		$scope.pageClass = 'page-cordillera';
	});

	darwin.controller('falklandislands', function($scope) {
		$scope.pageClass = 'page-falklandislands';
	});

	darwin.controller('galapagos', function($scope) {
		$scope.pageClass = 'page-galapagos';
	});

	darwin.controller('maldonado', function($scope) {
		$scope.pageClass = 'page-maldonado';
	});

	darwin.controller('mauritius', function($scope) {
		$scope.pageClass = 'page-mauritius';
	});

	darwin.controller('peru', function($scope) {
		$scope.pageClass = 'page-peru';
	});

	darwin.controller('riodejaneiro', function($scope) {
		$scope.pageClass = 'page-riodejaneiro';
	});

	darwin.controller('rionegro', function($scope) {
		$scope.pageClass = 'page-rionegro';
	});

	darwin.controller('santacruz', function($scope) {
		$scope.pageClass = 'page-santacruz';
	});

	darwin.controller('straitofmagellan', function($scope) {
		$scope.pageClass = 'page-straitofmagellan';
	});

	darwin.controller('tahiti', function($scope) {
		$scope.pageClass = 'page-tahiti';
	});

	darwin.controller('tierradelfuego', function($scope) {
		$scope.pageClass = 'page-tierradelfuego';
	});


	














