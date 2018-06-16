'use strict';

describe('Controller: ListRetiradaPoupancaCtrl', function () {

  // load the controller's module
  beforeEach(module('gestDividasApp'));

  var ListRetiradaPoupancaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListRetiradaPoupancaCtrl = $controller('ListRetiradaPoupancaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListRetiradaPoupancaCtrl.awesomeThings.length).toBe(3);
  });
});
