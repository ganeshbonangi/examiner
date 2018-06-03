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
    this.loader = [];
    this.currentQuestion = {
    	questionInstruction:'క్రింది వాటిలో సరైన జవాబును ఎంచుకోండి.',
    	questionInfo:'',
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
  editQuestion($event, $index){
    $event.stopPropagation();
    $event.preventDefault();
  }
  saveQuestion($event, $index){
    $event.stopPropagation();
    $event.preventDefault();
    this.loader[$index] = true;
    this.requestJSON = JSON.stringify(this.currentQuestion, null, 4);
    let _this = this;
     this.$http.post('/api/questions',this.currentQuestion).success(function(data){
       console.log(data);
       _this.loader[$index] = false;
     });
  }
  addQuestion(){
  	this.currentQuestion.question.push({
      opctions:[{},{},{},{}]
    });
  }
  deleteQuestion($event, $index){
    $event.stopPropagation();
    $event.preventDefault();
    if(this.currentQuestion.question.length>1){
        this.currentQuestion.question.splice($index, 1);
    }
  }
}

angular.module('authCellApp')
  .controller('authoringToolCtrl', authoringToolCtrl);
