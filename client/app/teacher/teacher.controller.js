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

            let self = this;
            this.$http.get('/api/classrooms/teacher/' + this.userId).then(response => {
                self.createdClasses = response.data;
                self.$http.get('/api/exams/teacher/' + self.userId).then(response => {
                    for(let i=0;i<response.data.length;i++){
                        for(let j=0;j<response.data[i].classRooms.length;j++){
                            for(let k=0;k<self.createdClasses.length;k++){
                                if(self.createdClasses[k]._id===response.data[i].classRooms[j]){
                                    self.createdClasses[k].id = self.createdClasses[k]._id;
                                    response.data[i].classRooms[j] = self.createdClasses[k];
                                    break;
                                }
                            }
                        }
                    }
                    self.conductingExams = response.data;
                });
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
                if(exam.examType === 'updating'){
                    for(let i=0;i<self.conductingExams.length;i++){
                        if(self.conductingExams[i]._id===exam._id){
                            self.conductingExams[i] = exam;
                            break;
                        }
                    }
                }else{
                    self.conductingExams.push(exam);
                }
            }, function() {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        }
        editExam() {

        }
        getExams() {

        }
        deleteExam(index) {
            if(window.confirm('Are you sure you want to delete Exam, OK to delete')){
                this.conductingExams.splice(index, 1);
            }
        }
        editClass() {

        }

        deleteClassRoom(index) {
            if(window.confirm('Are you sure you want to delete Class Room, OK to delete')){
                var cr = this.createdClasses[index];
                cr.disconnect = true;
                this.$http.put('/api/classrooms/'+cr._id,cr).then(response=>{
                    this.createdClasses.splice(index, 1);
                });
            }
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
