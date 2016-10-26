'use strict';

angular.module('authCellApp')
  .directive('mcsqAuth', function () {
    return {
      templateUrl: 'app/mcsqAuth/mcsqAuth.html',
      restrict: 'EA',
      link: function (/*scope, element, attrs*/) {
      }
    };
  });
