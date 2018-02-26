'use strict';

/**
 * @ngdoc function
 * @name gestDividasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gestDividasApp
 */
angular.module('gestDividasApp')
  .controller('MainCtrl', function ($scope, loginService,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm = $scope;
    /**
     * Verifica se usuario esta logado
     */
    vm.isLogged = function() {
      return loginService.confirmarLogin();
    }

    /**
     * 
     * @param {*Caminho para redirecionamento} path 
     */
    vm.goTo = function(path){
      $location.path(path);
    }

  });
