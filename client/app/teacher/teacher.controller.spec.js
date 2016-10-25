'use strict';

describe('Component: TeacherComponent', function () {

  // load the controller's module
  beforeEach(module('authCellApp'));

  var TeacherComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    TeacherComponent = $componentController('teacher', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
