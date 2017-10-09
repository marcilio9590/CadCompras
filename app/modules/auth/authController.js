(function () {
    'use strict';
    angular.module('myApp').controller('AuthController', function ($scope, msgs) {
        var vm = $scope;
        vm.msgs = msgs;
        
    });

})();