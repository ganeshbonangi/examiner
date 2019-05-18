'use strict';
    class mocktestComponent {
        constructor($http, $stateParams, $uibModal, $scope, $window) {
            angular.extend(this,{$http, $stateParams, $uibModal, $scope, $window});
            this.isSubmited = false;
            this.duration = 35;
            this.mocktest = {
                examid:this.$stateParams.mocktestId
            };
            this.currentQuestion = 0;
            let _this = this;
            this.showSpinner = true;
            $http.get('/api/questions/getCategory/'+this.$stateParams.mocktestId).success(function(data){
              _this.mocktest.questions = data;
              //_this.duration = 25; //(_this.mocktest.questions.length);//converting 1 question to 1 min//_this.mocktest.questions.length*60*1000
              _this.showSpinner = false;
            });
        }
        getQuestoin(index, questionId) {
            this.currentQuestion = index;

            this.$http.get('/api/questions/'+questionId,function(response){
                console.log(response);
            });
        }
        showResult() {
            let _this = this;
            this.isSubmited = true;
            this.$uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'app/mocktest/result.modal.html',
                controller: 'modalInstanceCtrl',
                controllerAs: 'modalInstanceCtrl',
                size: '',
                resolve: {
                    mocktest: function() {
                        return _this.mocktest;
                    }
                }
            });
        }
        resetAllSelection() {
            this.isSubmited = false;
            for(let i=0; i<this.mocktest.questions.length;i++){
                this.mocktest.questions[i].userAns = false;                
            }
        }
    }

    angular.module('authCellApp')
        .component('mocktest', {
            templateUrl: 'app/mocktest/mocktest.html',
            controller: mocktestComponent,
            controllerAs: 'mocktestCtrl'
        });
