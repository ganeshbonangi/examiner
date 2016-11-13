'use strict';

describe('Directive: mcmsPreview', function () {

  // load the directive's module and view
  beforeEach(module('authCellApp'));
  beforeEach(module('app/mcmsPreview/mcmsPreview.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mcms-preview></mcms-preview>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the mcmsPreview directive');
  }));
});
