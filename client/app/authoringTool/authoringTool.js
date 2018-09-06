'use strict';
angular.module('authCellApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('authoringTool', {
        url: '/authoringTool',
        templateUrl: 'app/authoringTool/authoringTool.html',
        controller:'authoringToolCtrl',
        controllerAs: 'at',
        authenticate: true
      });
  });