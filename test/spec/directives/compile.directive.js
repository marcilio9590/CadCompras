'use strict';

describe('Directive: compile.directive', function () {

  // load the directive's module
  beforeEach(module('gestDividasApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<compile.directive></compile.directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the compile.directive directive');
  }));
});
