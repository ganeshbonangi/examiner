'use strict';

(function(){

class TeacherComponent {
  constructor($uibModal) {
    var teacherCtrlScope = this;
    this.message = 'Hello';
    this.$uibModal = $uibModal;
    this.currentExam = {};
    this.conductingExams = [
      {
        examName:'Exam Name',
        activationDate:new Date(),
        experiationDate:new Date(),
        duration:'02:15',
        classRooms:[101,102],
        id:111
      },      {
        examName:'Exam Name',
        activationDate:new Date(),
        experiationDate:new Date(),
        duration:'02:15',
        classRooms:[101,102],
        id:112
      },      {
        examName:'Exam Name',
        activationDate:new Date(),
        experiationDate:new Date(),
        duration:'02:15',
        classRooms:[101,102],
        id:113
      }
    ];
    this.createdClasses = [
      {
        students:[1,2,3,4],
        classRoomName:'Class Room Name'
      },      {
        students:[1,2,3,4],
        classRoomName:'Class Room Name2'
      },      {
        students:[1,2,3,4],
        classRoomName:'Class Room Name3'
      },      {
        students:[1,2,3,4],
        classRoomName:'Class Room Name4'
      }
    ];
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
      teacherCtrlScope.conductingExams.push(selectedItem);
    }, function () {
      //$log.info('Modal dismissed at: ' + new Date());
    });



  }
  editExam(){
    addNewExam();
  }
  deleteExam(){

  }
  editClass(){

  }
  deleteClass(){
    
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
