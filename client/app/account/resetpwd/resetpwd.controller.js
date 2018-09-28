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
        this.message = 'Your password has been reset successfully!';
        console.log(response);
      }).catch(()=>{
        this.isSuccessfullyResetPwd = false;
        this.message = 'Failed to reset your password!';
      });
    }
  }
}

angular.module('authCellApp')
  .controller('ResetpwdController', ResetpwdController);
