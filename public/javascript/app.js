(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/Home.html'
		});
		$stateProvider.state('cars', {
			url: '/cars',
			templateUrl: 'views/createcars.html'
		});
		$stateProvider.state('EditCar', {
			url: '/cars/Edit/:id',
			templateUrl: 'javascript/EditCar/editcar.html'
		})
		$urlRouterProvider.otherwise('/');
	}
})();
