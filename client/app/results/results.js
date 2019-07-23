'use strict';

angular.module('authCellApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('results', {
        url: '/results?resultsId&id',
        template: '<results></results>'
      });
  });
