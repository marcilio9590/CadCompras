(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name gestDividasApp.controller:CartoesCtrl
   * @description
   * # CartoesCtrl
   * Controller of the gestDividasApp
   */
  angular.module('gestDividasApp')
    .controller('CartoesCtrl', function ($scope, loginService) {
      var vm = $scope;
      vm.goTo = loginService.goTo;
      function listarCartoes() {
        vm.cards = [];
        for (var i = 0; i < 10; i++) {
          vm.cards.push({
            codigo: i,
            nome: "Cartao " + i,
            dataVencimento: new Date()
          });
        }
      }

      function activate() {
        listarCartoes();
      }

      activate();

    });
})();
