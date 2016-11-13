'use strict';

angular.module('authCellApp')
  .directive('timer', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the timer directive');
      }
    };
  });
