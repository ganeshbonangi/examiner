'use strict';

(function() {

    class TeacherComponent {
        constructor($uibModal, $http) {
            this.$uibModal = $uibModal;
            this.currentExam = {};
            $http.get('/api/exams/teacher/' + 123).then(response => {
                this.conductingExams = response.data;
            });
            $http.get('/api/classrooms/teacher/' + 123).then(response => {
                this.createdClasses = response.data;
            });

        }
        addEditExam(size, currentExam) {
            var exam = {};
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

            modalInstance.result.then(function( /*selectedItem*/ ) {
                // teacherCtrlScope.conductingExams.push(selectedItem);
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
            this.createdClasses.splice(index, 1);
        }
        addEditClass(size, cr) {
            var CRoom = {};
            if(cr){
                CRoom = JSON.parse(JSON.stringify(cr));
            }
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
                        return CRoom;
                    }
                }
            });

            modalInstance.result.then(function(selectedItem) {
                this.selected = selectedItem;
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

class ModalInstanceCtrl {
    constructor() {

    }
}
angular.module('authCellApp')
    .controller('ModalInstanceCtrl', ModalInstanceCtrl);
