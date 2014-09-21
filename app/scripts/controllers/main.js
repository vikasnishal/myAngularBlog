'use strict';

/**
 * @ngdoc function
 * @name myAngularBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAngularBlogApp
 */
angular.module('myAngularBlogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
