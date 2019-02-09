'use strict';

(function() {

  class MainController {

    constructor($http, appConfig, Auth) {
      this.$http = $http;
     // this.awesomeThings = [];
      this.isFirstOpen = [true,true,true,true,true,true];
      this.subjects = appConfig.subjects[Auth.currentLang];
      this.slides = [{
        text: 'Create your own online exam to your students',
        id: 0
      },{
        text: 'Smart authoing tool enable you to author rich text',
        id: 1
      },{
        text: 'Create different types of questions(Mulitple choice and Comprehension question)',
        id: 2
      },{
        text: 'Link your tutorial videos to exams or exams to your youtube channels',
        id: 3
      },{
        text: 'Render exams in your own website',
        id: 4
      }];
      Auth.setCallBackForLangSwith(()=>{
          this.subjects = appConfig.subjects[Auth.currentLang];
      });
    }

    $onInit() {
      // this.$http.get('/api/things')
      //   .then(response => {
      //     this.awesomeThings = response.data;
      //     this.socket.syncUpdates('thing', this.awesomeThings);
      //   });
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
