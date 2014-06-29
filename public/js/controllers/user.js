'use strict';

angular.module('userApp', [])
.controller('conUserController', function($scope, User) {

	angular.extend($scope, {
		users: []
	});

	User.get().success(function(data) {
		angular.extend($scope, {
			users: data
		});
	});

	$scope.delete = function(id, index) {
		User.delete(id).success(function(data) {
			$scope.users.splice(index, 1);
		});
	};

}).controller('cadUserController', function($scope, $window, User) {

	angular.extend($scope, {
		user: {
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

});;