'use strict';

describe('Controller: CadastroSalarioCtrl', function () {

  // load the controller's module
  beforeEach(module('gestDividasApp'));

  var CadastroSalarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadastroSalarioCtrl = $controller('CadastroSalarioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CadastroSalarioCtrl.awesomeThings.length).toBe(3);
  });
});
