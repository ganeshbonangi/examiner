'use strict';

angular.module('authCellApp')
  .directive('fibTextPreview', function () {
    return {
      templateUrl: 'app/fibTextPreview/fibTextPreview.html',
      restrict: 'EA',
      link: function (/*scope, element, attrs*/) {
      }
    };
  });