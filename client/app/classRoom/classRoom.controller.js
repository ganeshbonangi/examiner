'use strict';

class classRoomCtrl{
	constructor($uibModalInstance,cr,$http,Auth) {
		this.cr=cr;
		this.$uibModalInstance = $uibModalInstance;
		this.$http = $http;
		this.getCurrentUser = Auth.getCurrentUser;
		this.cr.students = [1,2,3];
		this.displayStudents = ['gani','gani1','gani2'];
		this.suggestedStudents = [];
		this.showList = false;
	}
	cancel(){
		this.$uibModalInstance.dismiss('dismiss reason');
	}
	saveThisClassRoom(){
		this.$uibModalInstance.close(this.cr);
	}
	getStudents(){
		this.$http.post('/api/users/students',{name:this.student}).then(response=>{
			this.suggestedStudents = response.data;
			this.showList = true;
		});
	}
	addStudentToClassRoom(student){
		this.cr.students.push(student.id);
		this.displayStudents.push(student.name);
		this.showList = false;
		this.student = '';
	}
	removeStudentFromClassRoom(index){
		this.cr.students.splice(index,1);
		this.displayStudents.splice(index,1);
	}
	saveClassRoom(){
		this.cr.admin = this.getCurrentUser().id || 1000;
		this.$http.post('/api/classrooms',this.cr).then(response=>{
			console.log(response.data);
		});
	}
	updateClassRoom(){
		
	}
}
angular.module('authCellApp')
  .controller('classRoomCtrl', classRoomCtrl);