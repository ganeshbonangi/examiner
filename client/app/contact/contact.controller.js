'use strict';

(function() {

    class ContactComponent {
        constructor() {


        }
        
    }

    angular.module('authCellApp')
        .component('contact', {
            templateUrl: 'app/contact/contact.html',
            controller: ContactComponent,
            controllerAs: 'contactCtrl'
        });

})();
