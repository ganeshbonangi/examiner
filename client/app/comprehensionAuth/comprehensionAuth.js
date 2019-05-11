'use strict';
(function() {
	class comprehensionAuthComponent {
        constructor() {
            //this.question.instruction = 'క్రింది వాటిలో సరైన జవాబును ఎంచుకోండి.';
            /*this.question = {
                questionsList: [{
                    instruction:'',
                    information:'',
                    questiontext: '', 
                    type:'MCSS',
                    explainaiton:[{text:''}],
                    options:[{
                      content:''
                    },{
                      content:''
                    },{
                      content:''
                    },{
                      content:''
                    }]
                },{
                    instruction:'',
                    information:'',
                    questiontext: '', 
                    type:'MCSS',
                    explainaiton:[{text:''}],
                    options:[{
                      content:''
                    },{
                      content:''
                    },{
                      content:''
                    },{
                      content:''
                    }]
                }],
                passage : ''
            };*/
            
            if(!Array.isArray(this.question.explainaiton)){
               // this.question.explainaiton = [{text:''}];
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
        addQuestion(){
            this.question.questionsList.push({
                    instruction:'',
                    information:'',
                    questiontext: '', 
                    type:'MCSS',
                    explainaiton:[{text:''}],
                    options:[{
                      content:''
                    },{
                      content:''
                    },{
                      content:''
                    },{
                      content:''
                    }]
                });
        }
        deleteQuestion(index, $event){
            $event.stopPropagation();
            $event.preventDefault();
            this.question.questionsList.splice(index,1);
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
        	// for(let i=0;i<this.question.options.length;i++){
        	// 	if(this.question.options[i].isAns){
        	// 		this.isAns = i+'';
        	// 	}
        	// }
        }
    }
    angular.module('authCellApp')
        .component('comprehensionAuth', {
            templateUrl: 'app/comprehensionAuth/comprehensionAuth.html',
            controller: comprehensionAuthComponent,
            controllerAs: 'comprehensionAuthCtrl',
            bindings: {question: '=', editModeOn:'='}
        });
})();
