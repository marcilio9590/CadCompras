'use strict';

/**
 * @ngdoc function
 * @name gestDividasApp.controller:ListResponsavelDividasCtrl
 * @description
 * # ListResponsavelDividasCtrl
 * Controller of the gestDividasApp
 */
angular.module('gestDividasApp')
  .controller('ListResponsavelDividasCtrl', function ($scope,loginService) {

    var vm = $scope;
    vm.responsaveis = [];
    vm.goTo = loginService.goTo;

    function listarResponsaveis() {
      for (var i = 0; i < 10; i++) {
        vm.responsaveis.push({
          codigo: i,
          nome: "Responsavel " + i
        });
      }
    }

    function activate() {
      listarResponsaveis();
    }
    activate();


  });
