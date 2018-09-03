'use strict';

class ForgetpwdController {

  constructor(Auth, $http) {
    angular.extend(this,{Auth, $http});
  }

  sendPwdResetLink(form) {
    this.submitted = true;
    if (form.$valid) {
        this.$http.post('/api/users/resetEmail',{email:this.email})
        .then(()=>{
          this.message = 'Reset link sent to your mail.';
        })
        .catch(() => {
          form.email.$setValidity('mongoose', false);
          //this.errors.other = 'Incorrect mail id';
          this.message = 'Incorrect mail id';
        });
    }
  }
}

angular.module('authCellApp')
  .controller('ForgetpwdController', ForgetpwdController);
