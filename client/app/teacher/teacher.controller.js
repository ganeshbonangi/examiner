'use strict';

(function() {

    class TeacherComponent {
        constructor($uibModal, $http, Auth) {
            this.$uibModal = $uibModal;
            this.$http = $http;
            this.currentExam = {};
            this.getCurrentUser = Auth.getCurrentUser;
            this.userId = this.getCurrentUser()._id;
            this.role = this.getCurrentUser().role;
            this.conductingExams = [];
            this.studentReports = [];
            this.teacherReports = [];

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
/*                    for(let i=0;i<self.conductingExams.length;i++){
                        $http.get('/api/reports/'+self.conductingExams[i]._id).then(response=>{
                            for(let j=0;j<response.data.length;j++){
                                response.data[j].exam = self.conductingExams[i].name;
                            }
                            self.teacherReports[i] = response.data;
                        });
                    }*/
                });
            });

            $http.get('/api/exams/student/'+this.userId).then(response => {
                this.exams = response.data;
                for(let i=0;i<this.exams.length;i++){
                    $http.get('/api/reports/'+this.exams[i]._id).then(response=>{
                        for(let j=0;j<response.data.length;j++){
                            response.data[j].exam = this.exams[i].name;
                        }
                        this.studentReports[i] = response.data;
                    });
                }
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
                let currentExam = this.conductingExams[index];
                currentExam.disconnect = true;
                this.$http.put('/api/exams/'+currentExam._id,currentExam).then(()=>{
                    this.conductingExams.splice(index, 1);
                });
            }
        }
        editClass() {

        }

        deleteClassRoom(index) {
            if(window.confirm('Are you sure you want to delete Class Room, OK to delete')){
                var cr = this.createdClasses[index];
                cr.disconnect = true;
                this.$http.put('/api/classrooms/'+cr._id,cr).then(()=>{
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
