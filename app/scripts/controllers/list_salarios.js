'use strict';

/**
 * @ngdoc function
 * @name gestDividasApp.controller:ListSalariosCtrl
 * @description
 * # ListSalariosCtrl
 * Controller of the gestDividasApp
 */
angular.module('gestDividasApp')
  .controller('ListSalariosCtrl', function ($scope) {

    var vm = $scope;
    vm.salarios = [];

    function listarSalarios() {
      var data = new Date();
      var dia = data.getDate();

      for (var i = 0; i < 10; i++) {
        vm.salarios.push({
          codigo: i,
          valor: i + "000",
          diaRecebimento: dia + i
        });
      }
    }

    function activate() {
      listarSalarios();
    }
    activate();

  });
