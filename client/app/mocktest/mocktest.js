'use strict';

angular.module('authCellApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mocktest', {
        url: '/mocktest?mocktestId',
        template: '<mocktest></mocktest>'
      });
  });
