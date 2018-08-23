'use strict';

(function() {

    class StudentComponent {
        constructor($http, Auth) {
            this.message = 'Hello';
            this.Auth = Auth;
            this.userId = this.Auth.getCurrentUser()._id;
            this.reports = [];
            $http.get('/api/exams/student/'+this.userId).then(response => {
                this.exams = response.data;
                for(let i=0;i<this.exams.length;i++){
                    $http.get('/api/reports/'+this.exams[i]._id).then(response=>{
                        for(let j=0;j<response.data.length;j++){
                            response.data[j].exam = this.exams[i].name;
                        }
                        this.reports[i] = response.data;
                    });
                }
            });
        }
    }

    angular.module('authCellApp')
        .component('student', {
            templateUrl: 'app/student/student.html',
            controller: StudentComponent,
            controllerAs: 'studentCtrl'
        });

})();
