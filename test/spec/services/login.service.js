'use strict';

describe('Service: login.service', function () {

  // load the service's module
  beforeEach(module('gestDividasApp'));

  // instantiate service
  var login.service;
  beforeEach(inject(function (_login.service_) {
    login.service = _login.service_;
  }));

  it('should do something', function () {
    expect(!!login.service).toBe(true);
  });

});
