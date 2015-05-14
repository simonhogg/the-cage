'use strict';

/**
 * @ngdoc function
 * @name theCageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the theCageApp
 */
angular.module('theCageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
