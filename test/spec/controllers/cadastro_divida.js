'use strict';

describe('Controller: CadastroDividaCtrl', function () {

  // load the controller's module
  beforeEach(module('gestDividasApp'));

  var CadastroDividaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadastroDividaCtrl = $controller('CadastroDividaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CadastroDividaCtrl.awesomeThings.length).toBe(3);
  });
});
