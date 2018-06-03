'use strict';
(function() {
	class mcmqAuthComponent {
        constructor() {
            
        }
        answerChanged(index){
        	for(var i=0;i<this.question.opctions.length;i++){
        		if(index==i){
        			this.question.opctions[i].isAns = true;
        		}else{
        			this.question.opctions[i].isAns = false;
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