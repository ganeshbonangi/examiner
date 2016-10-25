'use strict';

(function(){

class TeacherComponent {
  constructor($uibModal) {
    this.message = 'Hello';
    this.$uibModal = $uibModal;
    this.currentExam = {};
  }
  addNewExam(size){
  	var currentExam = this.currentExam;
    var modalInstance = this.$uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'app/examSetup/examSetup.html',
      controller: 'examSetupCtrl',
      controllerAs: 'examSetupCtrl',
      size: size,
      resolve: {
        exam: function () {
          return currentExam;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      this.selected = selectedItem;
    }, function () {
      //$log.info('Modal dismissed at: ' + new Date());
    });



  }
  addNewClass(size){
    var modalInstance = this.$uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'app/classRoom/classRoom.html',
      controller: 'classRoomCtrl',
      controllerAs: 'classRoomCtrl',
      size: size,
      resolve: {
        exam: function () {
          return 'currentExam';
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      this.selected = selectedItem;
    }, function () {
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

class ModalInstanceCtrl{
	constructor() {

	}
}
angular.module('authCellApp')
  .controller('ModalInstanceCtrl', ModalInstanceCtrl);
