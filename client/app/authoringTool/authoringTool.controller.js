'use strict';

class authoringToolCtrl {
  constructor() {
    this.message = 'Hello';
    this.currentQuestion = {
    	questionInstruction:'',
    	questionInfo:'<p>Qinfo</p>',
    	question:[{
    		opctions:[{},{},{},{}]
    	},{
    		opctions:[{},{},{},{}]
    	}]
    };
    this.questionTitle= 'Question ';
    this.currentQuestionIndex = this.currentQuestion.question.length-1;
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
  deleteQuestion(){
  	this.currentQuestion.question.splice(this.currentQuestionIndex,1);
  	this.currentQuestionIndex--;
  }
}

angular.module('authCellApp')
  .controller('authoringToolCtrl', authoringToolCtrl);
