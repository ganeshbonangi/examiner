'use strict';

class examSetupCtrl {
    constructor($uibModalInstance, exam, utilService, $http, Auth) {
        this.$uibModalInstance = $uibModalInstance;
        this.$http = $http;
        this.Auth = Auth;
        this.user = this.Auth.getCurrentUser();
        this.popup1 = {
            opened: false
        };
        this.popup2 = {
            opened: false
        };
        this.format = 'dd-MMMM-yyyy';
        this.open1 = function() {
            this.popup1.opened = true;
        };
        this.open2 = function() {
            this.popup2.opened = true;
        };

        if (exam) {
            exam.activationdate = utilService.getDateObject(exam.activationdate);
            exam.expiredate = utilService.getDateObject(exam.expiredate);
            this.exam = exam;
            this.upDateTheExamVar = true;
            if(!this.exam.classRooms){
                this.exam.classRooms = [];
            }
        } else {
            this.exam = {
                hstep: 1,
                mstep: 5,
                classRooms:[],
                expiredate:null,
                activationdate:null
            };
        }
        this.dateOptions = {
            dateDisabled: false,
            formatYear: 'yy',
            maxDate: this.exam.expiredate,
            minDate: new Date(),
            startingDay: 1
        };
        this.endDateOptions = {
            dateDisabled: false,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: this.exam.activationdate,
            startingDay: 1
        };
    }
    cancel() {
        this.$uibModalInstance.dismiss('dismiss reason');
    }
    saveTheExam() {
        this.exam.authorid = this.user._id;
        let reqObj = angular.copy(this.exam), self = this;
        for(let i=0;i<reqObj.classRooms.length;i++){
            reqObj.classRooms[i] = reqObj.classRooms[i].id;
        }
        this.$http.post('/api/exams',reqObj).then((response)=>{
            self.exam.type = 'newClass';
            self.exam._id = response.data._id;
            this.$uibModalInstance.close(self.exam);
        });
    }
    getClassRooms(){
        this.$http.post('/api/classrooms/filterData',{name:this.className}).then(response=>{
            this.suggestedClassRooms = response.data;
            this.showList = true;
        });
    }
    removeClassRoomFromExam(index){
        this.exam.classRooms.splice(index,1);
    }
    addClassRoomToExam(clsObj){
        this.exam.classRooms.push({id:clsObj._id,name:clsObj.name});
        this.showList = false;
        this.className = '';
    }
    updateTheExam() {
        let reqObj = angular.copy(this.exam), self = this;
        for(let i=0;i<reqObj.classRooms.length;i++){
            reqObj.classRooms[i] = reqObj.classRooms[i].id;
        }
        this.$http.put('/api/exams/'+this.exam._id,reqObj).then(()=>{
            self.exam.examType = 'updating';
            this.$uibModalInstance.close(self.exam);            
        });
    }
  revertingBack() {
  //has to reset to it's original state.
  }
}
angular.module('authCellApp')
    .controller('examSetupCtrl', examSetupCtrl);
