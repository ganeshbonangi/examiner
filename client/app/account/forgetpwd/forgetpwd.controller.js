'use strict';

class ForgetpwdController {

  constructor(Auth, $http) {
    angular.extend(this,{Auth, $http});
    this.mailSent = false;
  }

  sendPwdResetLink(form) {
    this.submitted = true;
    if (form.$valid) {
        this.$http.post('/api/users/resetEmail',{email:this.email})
        .then(()=>{
          this.message = 'Reset link sent to your mail.';
          this.mailSent = true;
        })
        .catch(() => {
          form.email.$setValidity('mongoose', false);
          //this.errors.other = 'Incorrect mail id';
          this.message = 'Incorrect mail id or mail not register';
        });
    }
  }
}

angular.module('authCellApp')
  .controller('ForgetpwdController', ForgetpwdController);
