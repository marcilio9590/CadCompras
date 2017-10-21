(function () {
  'use strict';

  angular.module('myApp')
    .config(function ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
      $routeProvider
        .when('/home', {
          templateUrl: 'app/modules/home/home.html',
          controller: 'HomeController'
        }).otherwise({
          redirectTo: '/'
        });
    });
})();