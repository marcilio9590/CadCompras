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
        templateUrl: 'views/list_cartoes.html',
        controller: 'CartoesCtrl',
        controllerAs: 'cartoes'
      })
      .when('/cadastro_cartao', {
        templateUrl: 'views/cadastro_cartao.html',
        controller: 'CadastroCartaoCtrl',
        controllerAs: 'cadastroCartao'
      })
      .when('/cadastro_salario', {
        templateUrl: 'views/cadastro_salario.html',
        controller: 'CadastroSalarioCtrl',
        controllerAs: 'cadastroSalario'
      })
      .when('/list_salarios', {
        templateUrl: 'views/list_salarios.html',
        controller: 'ListSalariosCtrl',
        controllerAs: 'listSalarios'
      })
      .when('/cadastro_retirada_poupanca', {
        templateUrl: 'views/cadastro_retirada_poupanca.html',
        controller: 'CadastroRetiradaPoupancaCtrl',
        controllerAs: 'cadastroRetiradaPoupanca'
      })
      .when('/list_retirada_poupanca', {
        templateUrl: 'views/list_retirada_poupanca.html',
        controller: 'ListRetiradaPoupancaCtrl',
        controllerAs: 'listRetiradaPoupanca'
      })
      .when('/cadastro_divida', {
        templateUrl: 'views/cadastro_divida.html',
        controller: 'CadastroDividaCtrl',
        controllerAs: 'cadastroDivida'
      })
      .when('/list_divida', {
        templateUrl: 'views/list_divida.html',
        controller: 'ListDividaCtrl',
        controllerAs: 'listDivida'
      })
      .when('/estatisticas', {
        templateUrl: 'views/estatisticas.html',
        controller: 'EstatisticasCtrl',
        controllerAs: 'estatisticas'
      })
      .when('/cadastro_responsavel_dividas', {
        templateUrl: 'views/cadastro_responsavel_dividas.html',
        controller: 'CadastroResponsavelDividasCtrl',
        controllerAs: 'cadastroResponsavelDividas'
      })
      .when('/list_responsavel_dividas', {
        templateUrl: 'views/list_responsavel_dividas.html',
        controller: 'ListResponsavelDividasCtrl',
        controllerAs: 'listResponsavelDividas'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function ($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });
