(function() {
	'use strict';
	angular.module('app')
	.controller('createCarController', createCarController);

	createCarController.$inject = ['HomeFactory', '$state'];

	function createCarController(HomeFactory, $state) {
		var vm = this;
		vm.newCar = {};
		vm.createCarFunction = createCarFunction;

		function createCarFunction() {
			console.log(vm.newCar);
			console.log(vm.newCar);
			HomeFactory.createCarFunction(vm.newCar);
			$state.go('Home');
		};

	}

})();