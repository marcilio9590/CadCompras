'use strict';

/**
 * @ngdoc function
 * @name gestDividasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gestDividasApp
 */
angular.module('gestDividasApp')
  .controller('MainCtrl', function ($scope, loginService, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm = $scope;
    vm.goTo = loginService.goTo;
    /**
     * Verifica se usuario esta logado
     */
    vm.isLogged = function () {
      return loginService.confirmarLogin();
    }

  });
