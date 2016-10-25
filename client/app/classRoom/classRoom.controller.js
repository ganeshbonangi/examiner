'use strict';

class classRoomCtrl{
	constructor($uibModalInstance) {
		this.$uibModalInstance = $uibModalInstance;
	}
	cancel(){
		this.$uibModalInstance.dismiss('dismiss reason');
	}
}
angular.module('authCellApp')
  .controller('classRoomCtrl', classRoomCtrl);