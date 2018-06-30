'use strict';
(function() {
	class mcmqAuthComponent {
        constructor() {
            this.question.instruction = 'క్రింది వాటిలో సరైన జవాబును ఎంచుకోండి.';
            if(!Array.isArray(this.question.explainaiton)){
                this.question.explainaiton = [{text:''}];
            }
        }
        answerChanged(index){
        	for(var i=0;i<this.question.options.length;i++){
        		if(index===i){
        			this.question.options[i].isAns = true;
        		}else{
        			this.question.options[i].isAns = false;
        		}
        	}
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