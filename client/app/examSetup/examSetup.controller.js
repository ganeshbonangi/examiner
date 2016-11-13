'use strict';

class examSetupCtrl{
	constructor($uibModalInstance, exam) {
		/*this.exam = {
			examName: 'exam name999',
			activationDate:new Date(),
			experiationDate:new Date(),
			duration:new Date(),
			hstep:1,
			mstep:5
		};*/
		this.$uibModalInstance = $uibModalInstance;
		this.exam=exam;
	}
	cancel(){
		this.$uibModalInstance.dismiss('dismiss reason');
	}
	saveTheExam(){
		this.$uibModalInstance.close(this.exam);
	}
}
angular.module('authCellApp')
  .controller('examSetupCtrl', examSetupCtrl);