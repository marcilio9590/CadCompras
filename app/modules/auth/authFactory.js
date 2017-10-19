(function () {
    'use strict';

    angular.module('myApp').factory('AuthFactory', function () {
        
        function Usuario(user){
            this.login = user.login;
            this.senha = user.senha;
        }

        function convertUser(user) {
           var obj = {};
           obj = new Usuario(user);
        }

        var exports = {
            convertUser: convertUser
        }

        return exports;
    });


})();