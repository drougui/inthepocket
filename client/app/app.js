'use strict';

angular.module('inThePocketApp', [
  'inThePocketApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'digitalbs.speech'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
