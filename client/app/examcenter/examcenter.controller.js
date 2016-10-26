'use strict';

(function(){

class ExamcenterComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('authCellApp')
  .component('examcenter', {
    templateUrl: 'app/examcenter/examcenter.html',
    controller: ExamcenterComponent,
    controllerAs: 'examcenterCtrl'
  });

})();
