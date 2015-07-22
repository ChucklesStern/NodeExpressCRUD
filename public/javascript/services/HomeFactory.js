(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var o = {};
		o.getcallfunction = function () {
			$http.get('/cars').success(function(res){
				console.log(res);
			});
		};
		o.getcallfunction();
		return o;
	}
})();