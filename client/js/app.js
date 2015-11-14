var wcApp = angular.module('wcApp', ['ngRoute', 'ngAutocomplete', 'ngEnter', 'ui.bootstrap']);


wcApp.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/home.html'
	})
	.when('/home', {
		templateUrl: '/partials/home.html'
	})
	.when('/results', {
		templateUrl: '/partials/results.html'
	})
	.when('/map', {
		templateUrl: '/partials/map.html'
	})
	.when('/recipies', {
		templateUrl: '/partials/recipies.html'
	})
	.when('/images', {
		templateUrl: '/partials/images.html'
	})
	.when('/cancel', {
		// controller: 'PatientsController',
		// controllerAs: 'patiCtrl',
		templateUrl: '/partials/appointments.html'
	})
	.otherwise('/');

	// $locationProvider.html5Mode(true);
})