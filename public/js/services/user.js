'use strict';

angular.module('userService', []).factory('User', function($http) {
	return {
		get : function() {
			return $http.get('/user');
		},
		create : function(data) {
			return $http.post('/user', data);
		},
		delete : function(id) {
			return $http.delete('/user/' + id);
		}
	}
});