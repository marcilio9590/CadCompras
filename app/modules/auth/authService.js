(function () {
    'use strict';

    angular.module('myApp').service('AuthService', function ($http) {

        function login(user) {
            // return $http.post('localhost:8081/login', data).then(function(response){
            //     var user = AuthFactory.convertUser(response.data);
            // }).catch(function(err){
            //     console.log(err.data);
            // });
            var response = {
                data: {
                    login: "marcilio",
                    senha: "marcilio"
                }
            };
            return response;
        }

        var exports = {
            login: login
        }

        return exports;
    });


})();