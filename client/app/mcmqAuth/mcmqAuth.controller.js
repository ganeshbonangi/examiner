'use strict';
(function() {
	class mcmqAuthComponent {
        constructor() {
            this.question.instruction = 'క్రింది వాటిలో సరైన జవాబును ఎంచుకోండి.';
        }
        answerChanged(index){
        	for(var i=0;i<this.question.options.length;i++){
        		if(index==i){
        			this.question.options[i].isAns = true;
        		}else{
        			this.question.options[i].isAns = false;
        		}
        	}
        }
    }
    angular.module('authCellApp')
        .component('mcmqAuth', {
            templateUrl: 'app/mcmqAuth/mcmqAuth.html',
            controller: mcmqAuthComponent,
            controllerAs: 'mcmqAuthCtrl',
            bindings: {question: '='}
        });
})();