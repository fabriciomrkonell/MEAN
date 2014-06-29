'use strict';

angular.module('userService', []).factory('User', function($http) {
	return {
		getAll : function() {
			return $http.get('/user');
		},
		getById : function(id) {
			return $http.get('/user/' + id);
		},
		create : function(data) {
			if(data._id){
				return $http.post('/user/' + data._id, data);
			}else{
				return $http.post('/user', data);
			}
		},
		delete : function(id) {
			return $http.delete('/user/' + id);
		}
	}
});