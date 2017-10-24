'use strict';

describe('Controller: CadastroCartaoCtrl', function () {

  // load the controller's module
  beforeEach(module('gestDividasApp'));

  var CadastroCartaoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadastroCartaoCtrl = $controller('CadastroCartaoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CadastroCartaoCtrl.awesomeThings.length).toBe(3);
  });
});
