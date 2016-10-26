'use strict';

angular.module('authCellApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('student', {
        url: '/student',
        template: '<student></student>'
      });
  });
