'use strict';

class examSetupCtrl{
	constructor($uibModalInstance) {
		this.exam = {
			name: 'exam name999'
		};
		this.$uibModalInstance = $uibModalInstance;
	}
	cancel(){
		this.$uibModalInstance.dismiss('dismiss reason');
	}
}
angular.module('authCellApp')
  .controller('examSetupCtrl', examSetupCtrl);