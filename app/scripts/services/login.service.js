(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name gestDividasApp.login.service
     * @description
     * # login.service
     * Service in the gestDividasApp.
     */
    angular.module('gestDividasApp')
        .service('loginService', function ($location) {
            var logado = false;
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
                logado = true;
                return response;
            }

            function confirmarLogin() {
                return logado;
            }

            /**
             * 
             * @param {*Caminho para redirecionamento} path 
             */
            function goTo(path) {
                $location.path(path);
            }


            var exports = {
                login: login,
                confirmarLogin: confirmarLogin,
                goTo: goTo
            }

            return exports;
        });
})();
