'use strict';

class authoringToolCtrl {
  constructor($http, $window, $scope) {
    this.message = 'Hello';
    this.cat = 'testing';
    this.type = 'MCSS';
    this.toolBarFeatures = [
        ['h1', 'h2', 'h3', 'p', 'pre', 'quote'],
        ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
        ['justifyLeft','justifyCenter','justifyRight', 'justifyFull', 'indent', 'outdent'],
        ['html', 'insertImage', 'insertLink', 'insertVideo', 'wordcount', 'charcount']
    ];
    this.loader = [];
    this.isInValid = [];
    this.emptyQuestion =   {
        instruction:'fg',
        information:'ds',
        questiontext: 'dsf', 
        explainaiton:'df',
        options:[{
          content:'1'
        },{
          content:'2'
        },{
          content:'3'
        },{
          content:'4'
        }]
      };
    this.questions = [];
    this.questionTitle= 'Question ';
    angular.extend(this,{$window, $http, $scope});
    var _this = this;
    let header = document.getElementById("statictoolbar");
    let sticky = header.offsetTop-15;
    angular.element(this.$window).bind("scroll", function() {
      if (this.pageYOffset >= sticky) {
        _this.boolChangeClass = true;
      } else {
        _this.boolChangeClass = false;
      }
      _this.$scope.$apply();
    });
  }
  getEmptyQuestion(){
    return angular.copy(this.emptyQuestion);
  }
  getQuestion(){
    let _this = this;
    this.$http.get('/api/questions/getCategory/'+this.cat).success(function(data){
      _this.questions = data;
    });
  }
  editQuestion($event, $index){
    $event.stopPropagation();
    $event.preventDefault();
  }
  saveQuestion($event, $index){
    $event.stopPropagation();
    $event.preventDefault();
    this.questions[$index].category = this.cat;
    this.questions[$index].type = this.type;
    if(this.isValidQuestion($index)){
      this.loader[$index] = true;
      this.isInValid[$index] = false;
      let _this = this;
      if(this.questions[$index]._id){
        this.$http.put('/api/questions/'+this.questions[$index]._id,this.questions[$index]).success(function(data){
          _this.loader[$index] = false;
        });
      }else{
        this.$http.post('/api/questions',this.questions[$index]).success(function(data){
          _this.questions[$index]._id = data._id;
          _this.loader[$index] = false;
        }); 
      }

    }else{
      this.isInValid[$index] = true;
    }
    this.requestJSON = JSON.stringify(this.questions[$index], null, 4);

  }
  isValidQuestion($index){
    return (this.questions[$index].questiontext&&this.checkOptionsMarkup($index));
  }
  checkOptionsMarkup($index){
    let options = this.questions[$index].options;
    let ans = false;
    for(let i=0;i<options.length;i++){
      if(!options[i].content.trim()){
        return false;
      }else if(options[i].isAns){
        ans=true;
      }
    }
    if(ans){
      return true;
    }else{
      return false;
    }
  }
  addQuestion(){
  	this.questions.push(this.getEmptyQuestion());
  }
  deleteQuestion($event, $index){
    $event.stopPropagation();
    $event.preventDefault();
    if(this.questions.length>1){
        this.questions.splice($index, 1);
    }
  }
}

angular.module('authCellApp')
  .controller('authoringToolCtrl', authoringToolCtrl);
