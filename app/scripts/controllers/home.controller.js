'use strict';

/**
 * @ngdoc function
 * @name gestDividasApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the gestDividasApp
 */
angular.module('gestDividasApp')
  .controller('HomeCtrl', function ($scope, loginService,$route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm = $scope;
    vm.isLogged = true;
  });
