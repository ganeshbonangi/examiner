'use strict';

angular.module('authCellApp')
  .directive('guidlinesPreview', function () {
    return {
      templateUrl: 'app/guidlinesPreview/guidlinesPreview.html',
      restrict: 'EA',
      link: function (/*scope, element, attrs*/) {
      }
    };
  });
