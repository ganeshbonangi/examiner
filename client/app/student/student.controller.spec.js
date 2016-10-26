'use strict';

describe('Component: StudentComponent', function () {

  // load the controller's module
  beforeEach(module('authCellApp'));

  var StudentComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    StudentComponent = $componentController('student', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
