'use strict';

describe('Directive: mcmqAuth', function () {

  // load the directive's module and view
  beforeEach(module('authCellApp'));
  beforeEach(module('app/mcmqAuth/mcmqAuth.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mcmq-auth></mcmq-auth>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the mcmqAuth directive');
  }));
});
