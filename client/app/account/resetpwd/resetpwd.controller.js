'use strict';

class ResetpwdController {

  constructor($http, $stateParams) {
    angular.extend(this, {$http, $stateParams});
  }

  resetPassword(form) {
    this.submitted = true;
    this.isSuccessfullyResetPwd = false;
    if (form.$valid) {
      this.$http.post('api/users/forgotPassword',{'confirmPassword':this.user.confirmPassword, 'newPassword':this.user.newPassword, 'resetPasswordToken':this.$stateParams.token})
      .then((response)=>{
        this.isSuccessfullyResetPwd = true;
        this.message = 'Successfully password reset.';
        console.log(response);
      }).catch(()=>{
        this.isSuccessfullyResetPwd = false;
        this.message = 'Failed to reset password.';
      });
    }
  }
}

angular.module('authCellApp')
  .controller('ResetpwdController', ResetpwdController);
