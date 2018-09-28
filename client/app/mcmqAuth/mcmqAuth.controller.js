'use strict';
(function() {
	class mcmqAuthComponent {
        constructor() {
            this.question.instruction = 'క్రింది వాటిలో సరైన జవాబును ఎంచుకోండి.';
            if(!Array.isArray(this.question.explanation)){
                this.question.explanation = [{text:''}];
            }
        }
        answerChanged(index){
        	for(var i=0;i<this.question.options.length;i++){
        		if(index===i){sss
        			this.question.options[i].isAns = true;
        		}else{
        			this.question.options[i].isAns = false;
        		}
        	}
        }
        addOption(){
            this.question.options.push({isAns:false,content:''});
        }
        removeOption(index){
            this.question.options.splice(index,1);
        }
        addExp(){
            this.question.explainaiton.push({text:''});
        }
        $onInit(){
        	for(let i=0;i<this.question.options.length;i++){
        		if(this.question.options[i].isAns){
        			this.isAns = i+'';
        		}
        	}
        }
    }
    angular.module('authCellApp')
        .component('mcmqAuth', {
            templateUrl: 'app/mcmqAuth/mcmqAuth.html',
            controller: mcmqAuthComponent,
            controllerAs: 'mcmqAuthCtrl',
            bindings: {question: '=',isAns: '<', editModeOn:'='}
        });
})();
