'use strict';

class classRoomCtrl{
	constructor($uibModalInstance,cr) {
		this.$uibModalInstance = $uibModalInstance;
		this.cr=cr;
	}
	cancel(){
		this.$uibModalInstance.dismiss('dismiss reason');
	}
	saveThisClassRoom(){
		this.$uibModalInstance.close(this.cr);
	}
}
angular.module('authCellApp')
  .controller('classRoomCtrl', classRoomCtrl);