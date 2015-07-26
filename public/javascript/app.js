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
	//	$stateProvider.state('cars:id', {
	//		url: '/cars:id',
	//		templateUrl: 'views'
		//})
$urlRouterProvider.otherwise('/');
}
})();
