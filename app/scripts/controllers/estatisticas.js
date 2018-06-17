'use strict';

/**
 * @ngdoc function
 * @name gestDividasApp.controller:EstatisticasCtrl
 * @description
 * # EstatisticasCtrl
 * Controller of the gestDividasApp
 */
angular.module('gestDividasApp')
  .controller('EstatisticasCtrl', function ($scope, loginService) {
    var vm = $scope;
    vm.goTo = loginService.goTo;
    vm.creditoSalario = [];
    vm.responsaveis = [];
    vm.forms = {};

    function obterDiasCreditoSalarios() {
      vm.creditoSalario.push({ codigo: 1, valor: 615, dia: 17 }, { codigo: 2, valor: 765, dia: 28 });
    }

    function obterResponsaveis() {
      vm.responsaveis.push({ codigo: 1, nome: "Junior" }, { codigo: 2, nome: "Fatima" });
    }

    function obterEstatisticaPorDiaResp() {
      //TODO:
    }

    vm.limpar = function () {
      vm.forms = {};
    }

    function activate() {
      obterDiasCreditoSalarios();
      obterResponsaveis();
    }

    activate();

  });
