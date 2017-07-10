'use strict';

angular.module('authCellApp')
  .directive('mcssPreview', function () {
    return {
      templateUrl: 'app/mcssPreview/mcssPreview.html',
      restrict: 'EA',
      scope:{
      	question:'='
      },
      link: function (/*scope, element, attrs*/) {
      }
    };
  });
