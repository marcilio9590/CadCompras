'use strict';

/**
 * @ngdoc function
 * @name gestDividasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gestDividasApp
 */
angular.module('gestDividasApp')
  .controller('MainCtrl', function ($scope, loginService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm = $scope;
    vm.isLogged = function() {
      return loginService.confirmarLogin();
    }

  });
