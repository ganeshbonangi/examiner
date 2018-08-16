'use strict';

(function() {

    class StudentComponent {
        constructor($http, Auth) {
            this.message = 'Hello';
            this.Auth = Auth;
            this.userId = this.Auth.getCurrentUser()._id;
            $http.get('/api/exams/student/'+this.userId).then(response => {
                this.exams = response.data;
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
