'use strict';

class ResetpwdController {

  constructor($http, $stateParams) {
    angular.extend(this, {$http, $stateParams});
  }

  resetPassword(form) {
    this.submitted = true;
    if (form.$valid) {
      this.$http.post('api/users/forgotPassword',{'confirmPassword':this.user.confirmPassword, 'newPassword':this.user.newPassword, 'resetPasswordToken':this.$stateParams.token})
      .then((response)=>{
        console.log(response);
      });
    }
  }
}

angular.module('authCellApp')
  .controller('ResetpwdController', ResetpwdController);
