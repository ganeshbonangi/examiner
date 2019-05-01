'use strict';

(function() {

  class AdminController {
    constructor(User, $http) {
      // Use the User $resource to fetch all users
      this.users = User.query();
      $http.get('/api/exams/').then(response=>{
        this.exams = response.data;
      });
    }

    delete(/*user*/) {
      //user.$remove();
      //this.users.splice(this.users.indexOf(user), 1);
    }
  }

  angular.module('authCellApp.admin')
    .controller('AdminController', AdminController);
})();
