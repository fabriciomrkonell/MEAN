'use strict';

angular.module('cadUserApp', []).controller('cadUserController', function($scope, $window, User, $routeParams) {

	if($routeParams._id){
		User.getById($routeParams._id).success(function(data) {
			angular.extend($scope, {
				user: data
			});
		});
	};

	angular.extend($scope, {
		user: {
			_id: '',
			name: []
		}
	});

	$scope.salvarUser = function() {
		User.create($scope.user).success(function(data) {
			if(data.result){
				$window.location.href = "#ConUser";
			}else{
				$window.location.href = "#Home";
			}
		});
	};

});