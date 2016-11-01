'use strict';

class examSetupCtrl{
	constructor($uibModalInstance) {
		this.exam = {
			examName: 'exam name999',
			activationDate:new Date(),
			experiationDate:new Date(),
			duration:new Date(),
			hstep:1,
			mstep:5
		};
		this.$uibModalInstance = $uibModalInstance;
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