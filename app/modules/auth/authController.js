(function () {
    'use strict';
    angular.module('myApp').controller('AuthController', function ($scope,AuthService,$location) {
        var vm = $scope;
        vm.user = {};
        vm.login = function () {
            // AuthService.login(user).then(function(response){
            //     var user = AuthFactory.convertUser(response.data);
            // }).catch(function(err){
            //     console.log(err.data);
            // });
            if(AuthService.login(vm.user)){
                window.location.href = "/home";
            }
        }

    });

})();