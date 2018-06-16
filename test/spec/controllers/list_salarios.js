'use strict';

describe('Controller: ListSalariosCtrl', function () {

  // load the controller's module
  beforeEach(module('gestDividasApp'));

  var ListSalariosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListSalariosCtrl = $controller('ListSalariosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListSalariosCtrl.awesomeThings.length).toBe(3);
  });
});
