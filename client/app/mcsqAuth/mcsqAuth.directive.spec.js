'use strict';

describe('Directive: mcsqAuth', function () {

  // load the directive's module and view
  beforeEach(module('authCellApp'));
  beforeEach(module('app/mcsqAuth/mcsqAuth.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mcsq-auth></mcsq-auth>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the mcsqAuth directive');
  }));
});
