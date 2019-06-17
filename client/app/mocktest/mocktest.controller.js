'use strict';
    class mocktestComponent {
        constructor($http, $stateParams, $uibModal, $scope, $window, Auth) {
            angular.extend(this,{$http, $stateParams, $uibModal, $scope, $window, Auth});
            this.isSubmited = false;
            this.duration = -1;
            this.mocktest = {
                examid:this.$stateParams.mocktestId
            };
            this.currentQuestion = 0;
            this.examSetup = {};
            let _this = this;
            this.showSpinner = true;
            $http.get('/api/exams/'+this.$stateParams.mocktestId).success(function(data){
                let flag = false;
                _this.showInst = true;
                _this.examSetup = data;
                _this.Auth.setTitle(_this.examSetup.name+' Online Mock Test Free');
                if(_this.examSetup.duration){
                  let dt = new Date(_this.examSetup.duration);
                  _this.duration = (dt.getHours()*60)+dt.getMinutes();
                }
                if(_this.examSetup.passcode){
                  let userInput = _this.$window.prompt("Please enter passcode for exam", "");
                  if (userInput === _this.examSetup.passcode) {
                    flag = true;
                  }else{
                    _this.$window.alert("Wrong Passcode, please refresh.");
                  }
                }else{
                    flag = true;
                }
                if(flag){
                    $http.get('/api/questions/getCategory/'+_this.$stateParams.mocktestId).success(function(data){
                      _this.mocktest.questions = data;
                      //_this.duration = 25; //(_this.mocktest.questions.length);//converting 1 question to 1 min//_this.mocktest.questions.length*60*1000
                      _this.showSpinner = false;
                    });
                }
             }).error(function(){
              $http.get('/api/questions/getCategory/'+_this.$stateParams.mocktestId).success(function(data){
                                   _this.mocktest.questions = data;
                                   //_this.duration = 25; //(_this.mocktest.questions.length);//converting 1 question to 1 min//_this.mocktest.questions.length*60*1000
                                   _this.showSpinner = false;
                                 });
             });
        }
        getQuestoin(index, questionId) {
            this.currentQuestion = index;

            this.$http.get('/api/questions/'+questionId,function(response){
                console.log(response);
            });
        }
        showResult() {
          let user = this.Auth.getCurrentUser();
          if(!user.name){
              let name = this.$window.prompt("Please enter your name", "");
              if (name) {
                this.mocktest.user = {name:name};
              }else{
                return false;
              }
          }else{
            this.mocktest.user = user;
          }

            let _this = this;
            if(!this.examSetup.hideans){
              this.isSubmited = true;
            }
            this.duration = -1;
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
