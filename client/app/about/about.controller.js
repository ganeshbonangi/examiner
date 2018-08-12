'use strict';

(function() {

    class AboutComponent {
        constructor($uibModal, $http, Auth) {
            

        }
        getLocalStorage(){
            alert(localStorage.getItem("isWebView"));
        }
    }

    angular.module('authCellApp')
        .component('about', {
            templateUrl: 'app/about/about.html',
            controller: AboutComponent,
            controllerAs: 'aboutCtrl'
        });

})();
