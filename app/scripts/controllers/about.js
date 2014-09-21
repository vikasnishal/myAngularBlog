'use strict';

/**
 * @ngdoc function
 * @name myAngularBlogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAngularBlogApp
 */
angular.module('myAngularBlogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
