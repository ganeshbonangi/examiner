'use strict';

angular.module('authCellApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mocktest', {
        url: '/mocktest',
        template: '<mocktest></mocktest>'
      });
  });
