'use strict';

angular.module('authCellApp')
  .directive('mcmsPreview', function () {
    return {
      templateUrl: 'app/mcmsPreview/mcmsPreview.html',
      restrict: 'EA',
      scope:{
      	question:'='
      },
      link: function (/*scope, element, attrs*/) {
      }
    };
  });
