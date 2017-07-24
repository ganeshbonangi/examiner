'use strict';

class examSetupCtrl {
    constructor($uibModalInstance, exam, utilService, $http) {
        this.$uibModalInstance = $uibModalInstance;
        this.$http = $http;
        this.popup1 = {
            opened: false
        };
        this.popup2 = {
            opened: false
        };
        this.format = 'dd-MMMM-yyyy';
        this.dateOptions = {
            dateDisabled: false,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };
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
        } else {
            this.exam = {
                hstep: 1,
                mstep: 5
            };
        }
    }
    cancel() {
        this.$uibModalInstance.dismiss('dismiss reason');
    }
    saveTheExam() {
        this.$uibModalInstance.close(this.exam);
    }
    getClassRooms(){
        this.$http.post('/api/classrooms/filterData',{name:this.className}).then(response=>{
            this.suggestedClassRooms = response.data;
            this.showList = true;
        });
    }
  updateTheExam() {
  //has to make service call for update exam
  }
  revertingBack() {
  //has to reset to it's original state.
  }
}
angular.module('authCellApp')
    .controller('examSetupCtrl', examSetupCtrl);
