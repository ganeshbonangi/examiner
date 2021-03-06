'use strict';

class LoginController {
    constructor(Auth, $state) {
        this.user = {};
        this.errors = {};
        this.submitted = false;

        this.Auth = Auth;
        this.$state = $state;
    }

    login(form) {
        this.submitted = true;

        if (form.$valid) {
            this.Auth.login({
                    email: this.user.email,
                    password: this.user.password
                })
                .then(() => {
                    // Logged in, redirect to home
                    this.$state.go('main');
                })
                .catch(err => {
                    this.errors.other = err.message;
                });
        }
    }
    roleChange(role) {
        if (role === 'Admin') {
            this.user.email = 'admin@example.com';
            this.user.password = 'admin';
        } else if (role === 'Teacher') {
            this.user.email = 'test@example.com';
            this.user.password = 'test';
        } else {
            this.user.email = 'test@example.com';
            this.user.password = 'test';
        }
    }
}

angular.module('authCellApp')
    .controller('LoginController', LoginController);
