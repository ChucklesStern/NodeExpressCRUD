(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ['HomeFactory'];

	function HomeController(HomeFactory) {
		var vm = this;
		vm.title = 'Welcome to our App!';
		vm.newCar = {};
	//	vm.car = car;

	vm.gimmiecars = HomeFactory.gimmiecars;

	vm.deleteCar = HomeFactory.deleteCarFunction;

}
})();

