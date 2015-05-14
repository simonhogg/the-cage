'use strict';

/**
 * @ngdoc function
 * @name theCageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the theCageApp
 */
angular.module('theCageApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
