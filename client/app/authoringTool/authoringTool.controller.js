'use strict';

class authoringToolCtrl {
  constructor($http, $window, $scope) {
    this.message = 'Hello';
    this.toolBarFeatures = [
        ['h1', 'h2', 'h3', 'p', 'pre', 'quote'],
        ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
        ['justifyLeft','justifyCenter','justifyRight', 'justifyFull', 'indent', 'outdent'],
        ['html', 'insertImage', 'insertLink', 'insertVideo', 'wordcount', 'charcount']
    ];
    this.currentQuestion = {
    	questionInstruction:'',
    	questionInfo:'<p>Qinfo</p>',
    	question:[{
    		opctions:[{},{},{},{}]
    	}/*,{// for second question
    		opctions:[{},{},{},{}]
    	}*/]
    };
    this.questionTitle= 'Question ';
    this.currentQuestionIndex = this.currentQuestion.question.length-1;
    angular.extend(this,{$window, $http, $scope});
    var _this = this;
    let header = document.getElementById("statictoolbar");
    let sticky = header.offsetTop;
    angular.element(this.$window).bind("scroll", function() {
      if (this.pageYOffset >= sticky) {
        _this.boolChangeClass = true;
      } else {
        _this.boolChangeClass = false;
      }
      _this.$scope.$apply();
    });
  }
  setSelectedQuestion(index){
  	this.currentQuestionIndex = index;
  }
  addQuestion(){
  	if(this.currentQuestion.question.length<5){
  	  	this.currentQuestion.question.push({
  									    		disabled:false,
  									    		active:true
  									    	});
  	    this.currentQuestionIndex = this.currentQuestion.question.length-1;
  	}
  }
  sendData(){

    this.$http.post('/api/questions',this.currentQuestion).success(function(data){
      console.log(data);
    });
  }
  deleteQuestion(){
  	this.currentQuestion.question.splice(this.currentQuestionIndex,1);
  	this.currentQuestionIndex--;
  }
}

angular.module('authCellApp')
  .controller('authoringToolCtrl', authoringToolCtrl);
