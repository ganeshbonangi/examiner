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
        } else {
            this.exam = {
                examName: 'exam name999',
                activationDate: new Date(),
                experiationDate: new Date(),
                duration: new Date(),
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
        this.$http.get('/api/classrooms').then(response=>{
            this.suggestedStudents = response.data;
            this.showList = true;
        });
    }
}
angular.module('authCellApp')
    .controller('examSetupCtrl', examSetupCtrl);
