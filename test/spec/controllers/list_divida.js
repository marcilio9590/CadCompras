'use strict';

describe('Controller: ListDividaCtrl', function () {

  // load the controller's module
  beforeEach(module('gestDividasApp'));

  var ListDividaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListDividaCtrl = $controller('ListDividaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListDividaCtrl.awesomeThings.length).toBe(3);
  });
});
