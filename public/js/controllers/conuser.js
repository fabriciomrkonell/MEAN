'use strict';

angular.module('conUserApp', []).controller('conUserController', function($scope, User) {

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

});