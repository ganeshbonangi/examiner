'use strict';

function utilServiceService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var utilService = {
        getDateObject(millSec) {
        	return new Date(millSec);
        }
    };
    return utilService;
}

angular.module('authCellApp')
    .service('utilService', utilServiceService);
