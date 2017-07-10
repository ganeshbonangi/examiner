'use strict';

describe('Service: utilService', function () {

  // load the service's module
  beforeEach(module('authCellApp'));

  // instantiate service
  var utilService;
  beforeEach(inject(function (_utilService_) {
    utilService = _utilService_;
  }));

  it('should do something', function () {
    expect(!!utilService).to.be.true;
  });

});
