'use strict';

class classRoomCtrl{
	constructor($uibModalInstance,cr,$http,Auth) {
		this.cr=cr;
		this.$uibModalInstance = $uibModalInstance;
		this.$http = $http;
		this.getCurrentUser = Auth.getCurrentUser;
		if(!this.cr.students){
			this.cr.students = [];			
		}
		this.suggestedStudents = [];
		this.showList = false;
	}
	cancel(){
		this.$uibModalInstance.dismiss('dismiss reason');
	}
	getStudents(){
		this.$http.post('/api/users/students',{name:this.student}).then(response=>{
			this.suggestedStudents = response.data;
			this.showList = true;
		});
	}
	addStudentToClassRoom(student){
		this.cr.students.push({name:student.name,id:student.id});
		this.showList = false;
		this.student = '';
	}
	removeStudentFromClassRoom(index){
		this.cr.students.splice(index,1);
	}
	saveClassRoom(){
		this.cr.admin = this.getCurrentUser()._id || 1000;
		this.$http.post('/api/classrooms',this.cr).then(response=>{
			response.data.type = 'newClass';
			this.$uibModalInstance.close(response.data);
		});
	}
	updateClassRoom(){
		
	}
}
angular.module('authCellApp')
  .controller('classRoomCtrl', classRoomCtrl);