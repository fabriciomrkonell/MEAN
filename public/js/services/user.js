'use strict';

angular.module('userService', []).factory('User', function($http) {
	return {
		get : function() {
			return $http.get('/user');
		},
		create : function(todoData) {
			return $http.post('/user', todoData);
		},
		delete : function(id) {
			return $http.delete('/user/' + id);
		}
	}
});