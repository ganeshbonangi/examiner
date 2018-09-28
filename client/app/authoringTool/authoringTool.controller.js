'use strict';

class authoringToolCtrl {
  constructor($http, $window, $scope, appConfig, Auth) {
    this.message = 'Hello';
    this.Auth = Auth;
    this.cat = '';
    this.type = 'MCSS';
    this.toolBarFeatures = [
        ['h1', 'h2', 'h3', 'p', 'pre', 'quote'],
        ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
        ['justifyLeft','justifyCenter','justifyRight', 'justifyFull', 'indent', 'outdent'],
        ['html', 'insertImage', 'insertLink', 'insertVideo','speech']
    ];
    //console.log(window.localStorage.getItem('subject'));
    this.subjects = appConfig.subjects.telugu;
    this.loader = [];
    this.editModeOn = [];
    this.isInValid = [];
    this.searchBy = 'subject';
    this.emptyQuestion =   {
        instruction:'',
        information:'',
        questiontext: '', 
        explanation:[{text:''}],
        options:[{
          content:''
        },{
          content:''
        },{
          content:''
        },{
          content:''
        }]
      };
    this.questions = [];
    angular.extend(this,{$window, $http, $scope});
    var _this = this;
    let header = document.getElementById('statictoolbar');
    let sticky = header.offsetTop;
    angular.element(this.$window).bind('scroll', function() {
      if (this.pageYOffset >= sticky) {
        _this.boolChangeClass = true;
      } else {
        _this.boolChangeClass = false;
      }
      _this.$scope.$apply();
    });

    $http.get('/api/exams/teacher/' + this.Auth.getCurrentUser()._id).then(response => {
      _this.exams = response.data;
    });


  }
  chapterChange(){
    this.questions = [];
  }
  getEmptyQuestion(){
    return angular.copy(this.emptyQuestion);
  }
  subjectChange(){
    this.questions = [];
    this.cat = undefined;
  }
  filterChange(){
    this.questions = [];
    this.cat = undefined;
  }
  isAddQuestionDisable(){
    return !((this.searchBy === 'subject'||this.searchBy === 'instute')&&this.cat);
  }
  getQuestion(){
    let _this = this;
    if(this.searchBy === 'subject'||this.searchBy === 'instute'){
      if(this.cat){
        //window.localStorage.setItem('subject',this.chapters);
        this.showLoader = true;
        this.$http.get('/api/questions/getCategory/'+this.cat).success(function(data){
          _this.questions = data;
          _this.showLoader = false;
          _this.editModeOn = [];
          _this.showCatErrMessage = false;
        });
      }else{
        this.showCatErrMessage = true;
      }
    }else{
      if(this.qid){
        this.showLoader = true;
        this.$http.get('/api/questions/'+this.qid).success(function(data){
          _this.questions = [data];
          _this.showLoader = false;
          _this.editModeOn = [];
          _this.showCatErrMessage = false;
        }).error(()=>{
          _this.showLoader = false;
          _this.showCatErrMessage = true;
        });
      }else{
        this.showCatErrMessage = true;
      }
    }
  }
  editQuestion($event, $index){
    $event.stopPropagation();
    $event.preventDefault();
    this.editModeOn[$index] = true;
  }
  saveQuestion($event, $index){
    $event.stopPropagation();
    $event.preventDefault();
    if(this.loader[$index]){
      return false;
    }
    this.questions[$index].type = this.type;
    if(this.isValidQuestion($index)){
      this.loader[$index] = true;
      this.isInValid[$index] = false;
      let _this = this, question;
      question = JSON.parse(JSON.stringify(this.questions[$index]));
      for(let i=0;i<question.explanation.length;i++){
        if(!question.explanation[i].text.trim()){
          question.explanation.splice(i,1);
          i--;
        }
      }
      if(question._id){
        this.$http.put('/api/questions/'+question._id,question).success(()=>{
          _this.loader[$index] = false;
          _this.editModeOn[$index] = false;
        }).error(()=>{
          _this.loader[$index] = false;
          _this.isInValid[$index] = true;
          _this.errMsg = 'Not saved your question, Please try again.';
        });
      }else{
        question.category = this.cat;
        question.uploadedby = this.Auth.getCurrentUser()._id;
        this.$http.post('/api/questions',question).success(function(data){
          _this.questions[$index]._id = data._id;
          _this.questions[$index].category = data.category;
          _this.loader[$index] = false;
          _this.editModeOn[$index] = false;
        }).error(()=>{
          _this.loader[$index] = false;
          _this.isInValid[$index] = true;
          _this.errMsg = 'Not saved your question, Please try again.';
        }); 
      }

    }else{
      this.isInValid[$index] = true;
      this.errMsg = 'You missed some thing in the question.';
    }
  }
  isValidQuestion($index){
    if(this.searchBy === 'subject'){
      if(!this.cat){
        this.showCatErrMessage = true;
      }
      return (this.cat&&this.questions[$index].questiontext&&this.checkOptionsMarkup($index));
    }else{
      return true;
    }
  }
  stripText(html){
    var tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
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
    this.editModeOn[this.questions.length] = true;
  	this.questions.push(this.getEmptyQuestion());
  }
  deleteQuestion($event, $index){
    $event.stopPropagation();
    $event.preventDefault();
    let result = window.confirm('Are you sure you want to delete question? Press ok to delete, otherwise press cancel.');
    if(result&&this.questions.length){
      // todo make service call to delte
      this.loader[$index] = true;
      let _this = this;
      this.$http.delete('/api/questions/'+this.questions[$index]._id).success(()=>{
        _this.loader[$index] = false;
        _this.questions.splice($index, 1);
        _this.editModeOn.splice($index, 1);
      });

    }
  }
}

angular.module('authCellApp')
  .controller('authoringToolCtrl', authoringToolCtrl);
