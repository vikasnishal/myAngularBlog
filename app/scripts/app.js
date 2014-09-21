'use strict';

/**
 * @ngdoc overview
 * @name myAngularBlogApp
 * @description
 * # myAngularBlogApp
 *
 * Main module of the application.
 */
angular
  .module('myAngularBlogApp', [
    'ngRoute','ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
