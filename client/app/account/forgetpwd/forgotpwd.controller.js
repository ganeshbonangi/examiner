'use strict';

class ForgotpwdController {

  constructor(Auth, $http) {
    angular.extend(this,{Auth, $http});
    this.mailSent = false;
  }

  sendPwdResetLink(form) {
    this.submitted = true;
    if (form.$valid) {
        this.$http.post('/api/users/resetEmail',{email:this.email})
        .then(()=>{
          this.message = 'Password reset link has been sent to your mail!';
          this.mailSent = true;
        })
        .catch(() => {
          form.email.$setValidity('mongoose', false);
          //this.errors.other = 'Incorrect mail id';
          this.message = 'Incorrect mail id or mail not registered!';
        });
    }
  }
}

angular.module('authCellApp')
  .controller('ForgotpwdController', ForgotpwdController);
