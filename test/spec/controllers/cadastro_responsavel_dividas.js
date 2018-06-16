'use strict';

describe('Controller: CadastroResponsavelDividasCtrl', function () {

  // load the controller's module
  beforeEach(module('gestDividasApp'));

  var CadastroResponsavelDividasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadastroResponsavelDividasCtrl = $controller('CadastroResponsavelDividasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CadastroResponsavelDividasCtrl.awesomeThings.length).toBe(3);
  });
});
