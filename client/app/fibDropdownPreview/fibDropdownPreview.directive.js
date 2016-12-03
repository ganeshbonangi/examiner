'use strict';

angular.module('authCellApp')
  .directive('fibDropdownPreview', function () {
    return {
      templateUrl: 'app/fibDropdownPreview/fibDropdownPreview.html',
      restrict: 'EA',
      link: function (/*scope, element, attrs*/) {
      }
    };
  });