'use strict';
    class resultsComponent {
        constructor($http, $stateParams, $uibModal, $scope, $window, Auth) {
            angular.extend(this,{$http, $stateParams, $uibModal, $scope, $window, Auth});
            this.isSubmited = false;
            this.duration = -1;
            this.mocktest = {
                resultsId:this.$stateParams.resultsId
            };
            this.currentQuestion = 0;
            this.examSetup = {};
            let _this = this;
            this.showSpinner = true;
            $http.get('/api/exams/'+this.$stateParams.resultsId).success(function(data){
                            _this.examSetup = data;
                            _this.Auth.setTitle(_this.examSetup.name+' Mock Test Results');
            });

            $http.get('/api/reports/'+this.$stateParams.resultsId).then(response=>{
                _this.report = response.data;
            });
              if(this.$stateParams.id){
                $http.get('/api/users/'+this.$stateParams.id+'/getName').success(function(data){
                  _this.report.instName = data;
                });
              }
        }
    }

    angular.module('authCellApp')
        .component('results', {
            templateUrl: 'app/results/results.html',
            controller: resultsComponent,
            controllerAs: 'resultsCtrl'
        });
