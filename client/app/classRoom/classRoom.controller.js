'use strict';

class classRoomCtrl{
	constructor($uibModalInstance,cr,$http,Auth) {
		this.cr=cr;
		this.$uibModalInstance = $uibModalInstance;
		this.$http = $http;
		this.getCurrentUser = Auth.getCurrentUser;
    this.userId = this.getCurrentUser()._id || 1000;
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
    this.cr.disconnect = true;
	  this.$http.put('/api/classrooms/'+this.userId,this.cr).then(response=>{
			this.$uibModalInstance.close(response.data);
      this.cr.students.splice(index,1);
		});
	}
	saveClassRoom(){
		this.cr.admin = this.userId;
		this.$http.post('/api/classrooms',this.cr).then(response=>{
			response.data.type = 'newClass';
			this.$uibModalInstance.close(response.data);
		});
	}
	updateClassRoom(){
		 this.$http.put('/api/classrooms/'+this.userId,this.cr).then(response=>{
			this.$uibModalInstance.close(response.data);
		});
	}
}
angular.module('authCellApp')
  .controller('classRoomCtrl', classRoomCtrl);
