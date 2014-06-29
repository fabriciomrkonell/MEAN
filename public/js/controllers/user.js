'use strict';

angular.module('userApp', []).controller('userController', function($scope, $http, User) {

	angular.extend($scope, {
		users: []
	});

	User.get().success(function(data) {
		angular.extend($scope, {
			users: data
		});
	});

	$scope.create= function() {
		$scope.loading = true;
		if ($scope.formData.text != undefined) {
			User.create($scope.formData).success(function(data) {
				$scope.loading = false;
				$scope.formData = {};
				$scope.todos = data;
			});
		}
	};

	$scope.delete = function(id, index) {
		User.delete(id).success(function(data) {
			$scope.users.splice(index, 1);
		});
	};

});