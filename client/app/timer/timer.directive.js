'use strict';

angular.module('authCellApp')
  .directive('timer', function () {
    return {
      template: '<div>{{durationText}}</div>',
      restrict: 'EA',
      link: function (scope, element, attrs,$interval) {

      },
      controller:function($scope,$interval){
      	$scope.duration = new Date();
      	$scope.duration.setHours(0);
      	$scope.duration.setMinutes(20);
      	$scope.duration.setSeconds(0);
      	$scope.durationText = $scope.duration.getMinutes()+':'+('0'+$scope.duration.getSeconds()).slice(-2);
        $interval(function(){
        	var tm = new Date($scope.duration);
        	var sec = tm.getSeconds();
        	tm.setSeconds(sec-1); 
        	$scope.durationText = tm.getMinutes()+":"+('0'+tm.getSeconds()).slice(-2);
        	$scope.duration = tm.getTime();
        },1000);
      }
    };
  });
