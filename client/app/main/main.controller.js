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
      this.engMedium = 
[{
    '_id' : '5bf100df6fa5cc44a3d1aded',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Averages',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5bf7570fed2d2d0dc3a6418a',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Time and Work',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5bf825aded2d2d0dc3a6428b',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Time and distance',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c0e94c38c328e447984dd53',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Numbers',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c11f271417fb10004d38af0',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'H.C.F and L.C.M',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c1280f08c328e447984deee',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Problems on Ages',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c20ec289b95810004978571',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Decimal Fractions',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c264cc78c328e447984e407',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Problems on Numbers',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c4efe4b8c328e447984e8f5',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Simplification',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c4eff698c328e447984e8f6',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Square Roots and Cube Rooots',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c66ba65b681d0336b288c10',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'percentage',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c66bac2b681d0336b288c11',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Profit and loss',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c740d00b681d0336b289285',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Ratio and proportion',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c740d47b681d0336b289286',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Partnership',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c7be0c4b681d0336b28957a',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Chain Rule',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c7be0c6b681d0336b28957b',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Chain Rule',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c7be126b681d0336b28957c',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Pipes & Cisterns',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c7be12db681d0336b28957d',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Pipes & Cisterns',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c7be17eb681d0336b28957e',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Problems on trains',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c7be183b681d0336b28957f',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Problems on trains',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c7fc8e3b681d0336b289869',
    'expiredate' : ISODate('1970-01-01T00:00:00.000Z'),
    'activationdate' : ISODate('1970-01-01T00:00:00.000Z'),
    'name' : 'Boats and Streams',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c806c23b681d0336b2898e2',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Alligation and Mixture',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c806c59b681d0336b2898e3',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Simple Interest',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c806c80b681d0336b2898e4',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Compound Interest',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c828c01b681d0336b289b98',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Logarithms',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c828c57b681d0336b289b9a',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Area',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c94ae4eb681d0336b289fce',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Volume and Surface Areas',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c94aeb8b681d0336b289fcf',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Races and Games of Skill',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c965893b681d0336b28a113',
    'expiredate' : ISODate('1970-01-01T00:00:00.000Z'),
    'activationdate' : ISODate('1970-01-01T00:00:00.000Z'),
    'name' : 'Calenders',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c968df5b681d0336b28a146',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Clocks',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c969f0db681d0336b28a1a6',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Stock and Shares',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c973dcbb681d0336b28a1b6',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Permutations and Combinations',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c988bc7b681d0336b28a273',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Probability',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c988c09b681d0336b28a274',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'True Discount',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c98c9aab681d0336b28a326',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Banker's Discount',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c98d356b681d0336b28a368',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Heights and Distances',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
},

{
    '_id' : '5c98ee0cb681d0336b28a3a6',
    'expiredate' : null,
    'activationdate' : null,
    'name' : 'Odd Man Out and Series',
    'authorid' : '5b21c16c69aaaa0004e55c6a',
    'disconnect' : false,
    'classRooms' : [],
    '__v' : 0
}
];
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
