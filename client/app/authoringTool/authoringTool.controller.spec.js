'use strict';

describe('Component: AuthoringToolComponent', function () {

  // load the controller's module
  beforeEach(module('authCellApp'));

  var AuthoringToolComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AuthoringToolComponent = $componentController('authoringTool', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
