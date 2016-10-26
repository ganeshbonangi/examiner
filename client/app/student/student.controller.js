'use strict';

(function(){

class StudentComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('authCellApp')
  .component('student', {
    templateUrl: 'app/student/student.html',
    controller: StudentComponent,
    controllerAs: 'studentCtrl'
  });

})();
