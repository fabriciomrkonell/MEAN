'use strict';

angular.module('app', ['conUserApp', 'cadUserApp', 'userService', 'ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/Home', {
        templateUrl: 'view/home.html',
      }).
      when('/ConUser', {
        templateUrl: 'view/conuser.html',
        controller: 'conUserController'
      }).
      when('/CadUser', {
        templateUrl: 'view/caduser.html',
        controller: 'cadUserController'
      }).
      otherwise({
        redirectTo: '/Home'
    });
}]);