(function() {
	'use strict';
	angular.module('app')
	.controller('editCarController', editCarController);

	editCarController.$inject = ['$state','HomeFactory', '$stateParams'];

	function editCarController($state, HomeFactory, $stateParams) {
		var vm = this;
	//	vm.title = 'Welcome to our App!';
	HomeFactory.getCar($stateParams.id).then(function(res) {
		vm.car = res;
	}, function(res) {
		$state.go('Home');
	})
//	vm.gimmiecars = HomeFactory.gimmiecars;

vm.editCar = editCar;

function editCar() {
	HomeFactory.editCar(vm.car).then(function() {
		$state.go('Home');
	});
}

}
})();

