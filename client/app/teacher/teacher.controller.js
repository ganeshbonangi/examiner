'use strict';

(function() {

    class TeacherComponent {
        constructor($uibModal, $http, Auth) {
            this.$uibModal = $uibModal;
            this.$http = $http;
            this.currentExam = {};
            this.getCurrentUser = Auth.getCurrentUser;
            this.userId = this.getCurrentUser()._id||1000;
            this.conductingExams = [];

            this.$http.get('/api/exams/teacher/' + this.userId).then(response => {
                this.conductingExams = response.data;
            });
            this.$http.get('/api/classrooms/teacher/' + this.userId).then(response => {
                this.createdClasses = response.data;
            });

        }
        addEditExam(size, currentExam) {
            var exam = null;
            var self = this;
            if(currentExam){
                exam = JSON.parse(JSON.stringify(currentExam));                
            }
            var modalInstance = this.$uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'app/examSetup/examSetup.html',
                controller: 'examSetupCtrl',
                controllerAs: 'examSetupCtrl',
                size: size,
                resolve: {
                    exam: function() {
                        return exam;
                    }
                }
            });

            modalInstance.result.then(function(exam) {
                self.conductingExams.push(exam);
            }, function() {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        }
        editExam() {

        }
        getExams() {

        }
        deleteExam(index) {
            this.conductingExams.splice(index, 1);
        }
        editClass() {

        }

        deleteClassRoom(index) {
            var cr = this.createdClasses[index];
            cr.disconnect = true;
            this.$http.put('/api/classrooms/'+cr._id,cr).then(response=>{
                this.createdClasses.splice(index, 1);
                console.log(response);
            });
        }
        addEditClass(size, cr) {
            var self = this;
            var modalInstance = this.$uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'app/classRoom/classRoom.html',
                controller: 'classRoomCtrl',
                controllerAs: 'classRoomCtrl',
                size: size,
                resolve: {
                    cr: function() {
                        return cr;
                    }
                }
            });

            modalInstance.result.then(function(selectedItem) {
                if(selectedItem.type === 'newClass'){
                    self.createdClasses.push(selectedItem);
                }
            }, function() {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        }
    }

    angular.module('authCellApp')
        .component('teacher', {
            templateUrl: 'app/teacher/teacher.html',
            controller: TeacherComponent,
            controllerAs: 'teacherCtrl'
        });

})();
