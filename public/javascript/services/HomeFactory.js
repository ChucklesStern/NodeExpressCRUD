(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var o = {};
		o.gimmiecars = [];
		
		o.getcallfunction = function () {
			var q = $q.defer();
			$http.get('/cars').success(function(res){
				o.gimmiecars.length = 0;
				for (var i = 0; i < res.length; i++) {
					o.gimmiecars.push(res[i]);
				}
				q.resolve();
				console.log(o.gimmiecars);
			});
			return q.promise;
		};

		o.createCarFunction = function (newC) {
			var def = $q.defer();
			$http.post('/cars', {cars: newC}).success(function(data) {
				newC.id = data.id;
				o.gimmiecars.push(newC);
				console.log(newC);
				def.resolve();
			});
			return def.promise;
		};

		o.getCar = function(id) {
			var q = $q.defer();
			$http.get('/cars' + id).success(function(res) {
				q.resolve(res);
			}).error(function(res) {
				q.reject(res);
			});
			return q.promise;
		}

		o.findCar = function(id) {
			if (o.gimmiecars.length > 0) {
				for (var i = 0; i < o.gimmiecars.length; i++) {
					if(o.gimmiecars[i].id === id) {
						console.log(i);
						return i;
					}
				}
			}
			else return null;
		}
		o.deleteCarFunction = function(id) {
			var q = $q.defer();
			$http.delete('/cars' + id).success(function(res) {
				var index = o.findCar(id);
				if(index !== null) {
					o.gimmiecars.splice(id, 1);
					console.log(o.gimmiecars)
				}
				q.resolve();
			});
			return q.promise;
		}
		o.editCar = function(car) {
			var q = $q.defer();
			$http.put('/cars' + car.id, car).success(function(res) {
				var index = o.findCar(car.id);
				console.log(index);
				//var index = val.match(/\d+/g);
				o.gimmiecars[index] = angular.copy(car);
				console.log(angular.copy(car))
				console.log(o.gimmiecars);
				q.resolve();
			})
			return q.promise;
		}
		
		o.getcallfunction();
		return o;
	}
})();