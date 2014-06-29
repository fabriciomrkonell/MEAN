'use strict';

angular.module('app', ['userApp', 'userService', 'ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/Home', {
        templateUrl: 'view/home.html',
      }).
      when('/User', {
        templateUrl: 'view/conuser.html',
        controller: 'userController'
      }).
      otherwise({
        redirectTo: '/Home'
    });
}]);