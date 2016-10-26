'use strict';

angular.module('authCellApp')
  .directive('mcmqAuth', function () {
    return {
      templateUrl: 'app/mcmqAuth/mcmqAuth.html',
      restrict: 'EA',
      link: function (/*scope, element, attrs*/) {
      }
    };
  });
