'use strict';

angular.module('authCellApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teacher', {
        url: '/teacher',
        template: '<teacher></teacher>'
      });
  });
