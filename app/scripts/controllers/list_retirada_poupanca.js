'use strict';

/**
 * @ngdoc function
 * @name gestDividasApp.controller:ListRetiradaPoupancaCtrl
 * @description
 * # ListRetiradaPoupancaCtrl
 * Controller of the gestDividasApp
 */
angular.module('gestDividasApp')
  .controller('ListRetiradaPoupancaCtrl', function ($scope, loginService) {

    var vm = $scope;
    vm.retiradas = [];
    vm.goTo = loginService.goTo;

    function listarRetiradas() {
      var date = new Date();
      var dia = date.getDate();
      for (var i = 0; i < 10; i++) {
        vm.retiradas.push({
          codigo: i,
          valor: i + "000",
          dia: dia + i,
          motivo: "Motivo " + i
        });
      }
    }

    function activate() {
      listarRetiradas();
    }
    activate();

  });
