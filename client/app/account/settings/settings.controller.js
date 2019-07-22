'use strict';

class SettingsController {

  constructor(Auth) {
    this.Auth = Auth;
    this.user = {};
    this.user.name = this.Auth.getCurrentUser().name
  }

  changePassword(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.message = 'Password successfully changed.';
        })
        .catch(() => {
          form.password.$setValidity('mongoose', false);
          this.errors.other = 'Incorrect password';
          this.message = '';
        });
    }
  }

    changeName(form) {
      this.submitted = true;

      if (form.$valid) {
        this.Auth.changeName(this.user.name)
          .then(() => {
            this.message = 'Name successfully changed.';
          })
          .catch(() => {
            form.password.$setValidity('mongoose', false);
            this.errors.other = 'Incorrect name';
            this.message = '';
          });
      }
    }
}

angular.module('authCellApp')
  .controller('SettingsController', SettingsController);
