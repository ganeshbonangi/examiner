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
            $http.get('/api/reports/'+this.$stateParams.resultsId).then(response=>{
                _this.report = response.data;
            });
        }
    }

    angular.module('authCellApp')
        .component('results', {
            templateUrl: 'app/results/results.html',
            controller: resultsComponent,
            controllerAs: 'resultsCtrl'
        });
