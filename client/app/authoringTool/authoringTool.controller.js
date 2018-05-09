'use strict';

class authoringToolCtrl {
  constructor($http) {
    this.message = 'Hello';
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
    this.$http = $http;
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
