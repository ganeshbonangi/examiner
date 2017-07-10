'use strict';

(function() {

    class StudentComponent {
        constructor($http) {
            this.message = 'Hello';
            $http.get('/api/exams/student/'+234).then(response => {
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
