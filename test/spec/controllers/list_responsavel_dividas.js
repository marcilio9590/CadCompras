'use strict';

describe('Controller: ListResponsavelDividasCtrl', function () {

  // load the controller's module
  beforeEach(module('gestDividasApp'));

  var ListResponsavelDividasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListResponsavelDividasCtrl = $controller('ListResponsavelDividasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListResponsavelDividasCtrl.awesomeThings.length).toBe(3);
  });
});
