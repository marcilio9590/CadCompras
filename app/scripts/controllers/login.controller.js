(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name gestDividasApp.controller:LoginCtrl
   * @description
   * # LoginCtrl
   * Controller of the gestDividasApp
   */
  angular.module('gestDividasApp')
    .controller('LoginCtrl', function (loginService, $scope, $location) {
      var vm = $scope;
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
      vm.user = {};
      vm.isLogged = true;

      vm.logar = function() {
        // loginService.login(user).then(function(response){
        //     var user = AuthFactory.convertUser(response.data);
        // }).catch(function(err){
        //     console.log(err.data);
        // });
        if (loginService.login(vm.user)) {
          $location.path('/home');
        }
      }

    });
})();
