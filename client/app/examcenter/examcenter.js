'use strict';

angular.module('authCellApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('examcenter', {
        url: '/examcenter',
        template: '<examcenter></examcenter>'
      }).state('examcenter.questions', {
        url: '/examcenter/:examId',
        template: '<examcenter></examcenter>'
      });
  });
