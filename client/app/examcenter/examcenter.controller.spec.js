'use strict';

describe('Component: ExamcenterComponent', function () {

  // load the controller's module
  beforeEach(module('authCellApp'));

  var ExamcenterComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ExamcenterComponent = $componentController('examcenter', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
