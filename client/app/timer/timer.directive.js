'use strict';

angular.module('authCellApp')
  .directive('timer', function () {
    return {
      template: '<div><i class="fa fa-clock-o" aria-hidden="true"></i> {{durationText}}</div>',
      restrict: 'EA',
      scope:{duration:'='},
      // link: function (scope, element, attrs,$interval) {

      // },
      controller:function($scope,$interval){
        if($scope.duration){
          $scope.duration = new Date($scope.duration);
          $scope.durationText = $scope.duration.getMinutes()+':'+('0'+$scope.duration.getSeconds()).slice(-2);          
        }
        var stop = $interval(function(){
        	let tm = new Date($scope.duration);
        	let sec = tm.getSeconds();
          let min = tm.getMinutes();
          if(!sec && !min){
            $interval.cancel(stop);
            return false;
          }
        	tm.setSeconds(sec-1); 
        	$scope.durationText = tm.getMinutes()+':'+('0'+tm.getSeconds()).slice(-2);
        	$scope.duration = tm.getTime();
        },1000);
      }
    };
  });
