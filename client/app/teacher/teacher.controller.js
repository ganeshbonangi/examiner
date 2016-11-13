'use strict';

(function(){

class TeacherComponent {
  constructor($uibModal) {
    this.message = 'Hello';
    this.$uibModal = $uibModal;
    this.currentExam = {};
    this.conductingExams = [
      {
        examName:'SBI_po',
        activationDate:'14-04-2016 14:30:00',
        experiationDate:'14-04-2016 16:45:00',
        duration:'02:15',
        classRooms:[101,102,103,104],
        id:111
      },    
        {
        examName:'IBPS',
        activationDate:'14-04-2016 14:30:00',
        experiationDate:'14-04-2016 16:45:00',
        duration:'02:15',
        classRooms:[101,102],
        id:112
      },    
      {
        examName:'RRB',
        activationDate:'14-04-2016 14:30:00',
        experiationDate:'14-04-2016 16:45:00',
        duration:'02:15',
        classRooms:[90],
        id:113
      },    
      {
        examName:'RRB',
        activationDate:'14-04-2016 14:30:00',
        experiationDate:'14-04-2016 16:45:00',
        duration:'02:15',
        classRooms:[],
        id:113
      }
    ];
    this.createdClasses = [
      {
        students:[1,2,3],
        classRoomName:'Class1'
      },      {
        students:[1,2,3,4,5],
        classRoomName:'Class2'
      },      {
        students:[1,2],
        classRoomName:'Class3'
      },      {
        students:[1,2,3,4,5,6,7],
        classRoomName:'Class4'
      }
    ];
  }
  addEditExam(size, currentExam){
  	//var currentExam = this.currentExam;
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

    modalInstance.result.then(function (/*selectedItem*/) {
      teacherCtrlScope.conductingExams.push(selectedItem);
    }, function () {
      //$log.info('Modal dismissed at: ' + new Date());
    });



  }
  editExam(){
    
    }
  deleteExam(index){
    this.conductingExams.splice(index,1);
  }
  editClass(){
  
      }
   
  deleteClass(){
    
  }
  addEditClass(size, cr){
    var modalInstance = this.$uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl : 'app/classRoom/classRoom.html',
      controller: 'classRoomCtrl',
      controllerAs: 'classRoomCtrl',
      size: size,
      resolve: {
        cr: function () {
          return cr;
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
