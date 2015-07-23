(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var o = {};
		o.gimmiecars = [];
		o.getcallfunction = function () {
			$http.get('/cars').success(function(res){
				for (var prop in res) {
					console.log(res);
					o.gimmiecars.push(res[prop]);
				}
			});
		};

		o.createCarFunction = function (newC) {
			var def = $q.defer();
			$http.post('/cars', {cars: newC}).success(function(data) {
			//	newC.name = data.name;
			o.gimmiecars.push(newC);
			console.log(newC);
			def.resolve();
		});
			return def.promise;
		};

		o.getcallfunction();
		return o;
	}
})();