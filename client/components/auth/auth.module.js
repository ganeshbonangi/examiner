'use strict';

angular.module('authCellApp.auth', ['authCellApp.constants', 'authCellApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
