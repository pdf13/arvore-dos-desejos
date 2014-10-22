'use strict';

angular.module('add')
  .controller('MainCtrl', function ($scope) {
    $scope.screen = 'inicial';

    $scope.goTo = function(target){
      $scope.screen = target;
    };
  });
