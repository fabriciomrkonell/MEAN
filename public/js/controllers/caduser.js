'use strict';

angular.module('cadUserApp', []).controller('cadUserController', function($scope, $window, User) {

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

});