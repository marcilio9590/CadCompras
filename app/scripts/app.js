'use strict';

/**
 * @ngdoc overview
 * @name gestDividasApp
 * @description
 * # gestDividasApp
 *
 * Main module of the application.
 */
angular
  .module('gestDividasApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'angularUtils.directives.dirPagination'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/cartoes', {
        templateUrl: 'views/cartoes.html',
        controller: 'CartoesCtrl',
        controllerAs: 'cartoes'
      })
      .when('/cadastro_cartao', {
        templateUrl: 'views/cadastro_cartao.html',
        controller: 'CadastroCartaoCtrl',
        controllerAs: 'cadastroCartao'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function($mdThemingProvider) {
    
        // Configure a dark theme with primary foreground yellow
    
        $mdThemingProvider.theme('docs-dark', 'default')
          .primaryPalette('yellow')
          .dark();
    
      });
