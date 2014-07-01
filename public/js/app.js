'use strict';

angular.module('userApp', []);

angular.module('app', ['userApp', 'ngRoute'])
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
      when('/CadUser/:_id', {
        templateUrl: 'view/caduser.html',
        controller: 'cadUserController'
      }).
      otherwise({
        redirectTo: '/Home'
    });
}]);