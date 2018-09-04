'use strict';

(function() {

    class AboutComponent {
        constructor() {
            
        }
    }

    angular.module('authCellApp')
        .component('about', {
            templateUrl: 'app/about/about.html',
            controller: AboutComponent,
            controllerAs: 'aboutCtrl'
        });

})();
