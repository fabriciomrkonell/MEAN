'use strict';

angular.module('todoController', []).controller('mainController', function($scope, $http, User) {

	$scope.formData = {};
	$scope.loading = true;

	User.get().success(function(data) {
		$scope.todos = data;
		$scope.loading = false;
	});

	$scope.createTodo = function() {
		$scope.loading = true;
		if ($scope.formData.text != undefined) {
			User.create($scope.formData).success(function(data) {
				$scope.loading = false;
				$scope.formData = {};
				$scope.todos = data;
			});
		}
	};

	$scope.deleteTodo = function(id) {
		$scope.loading = true;
		User.delete(id).success(function(data) {
			$scope.loading = false;
			$scope.todos = data;
		});
	};

});