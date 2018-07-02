'use strict';

(function() {

  class MainController {

    constructor($http, appConfig) {
      this.$http = $http;
      this.awesomeThings = [];
      this.isFirstOpen = [true];
      this.subjects = appConfig.subjects.telugu;
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
        //  this.socket.syncUpdates('thing', this.awesomeThings);
        });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('authCellApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:'mc'
    });
})();
