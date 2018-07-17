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
        $scope.isFirstTime = true;
        var stop = $interval(function(){
          if($scope.isFirstTime && $scope.duration){
            $scope.isFirstTime = false;
            $scope.duration = new Date(new Date(new Date().setHours(parseInt($scope.duration/60))).setMinutes($scope.duration%60)).setSeconds(0);
          }
        	let tm = new Date($scope.duration);
        	let sec = tm.getSeconds();
          let min = tm.getMinutes();
          let hrs = tm.getHours();
          if(!sec && !min && !hrs){
            $interval.cancel(stop);
            return false;
          }
        	tm.setSeconds(sec-1); 
        	$scope.durationText = ('0'+tm.getHours()).slice(-2)+':'+('0'+tm.getMinutes()).slice(-2)+':'+('0'+tm.getSeconds()).slice(-2);
        	$scope.duration = tm.getTime();
        },1000);
      }
    };
  });
