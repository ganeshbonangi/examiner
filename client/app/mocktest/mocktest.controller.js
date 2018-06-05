'use strict';

(function() {
    class mocktestComponent {
        constructor($http) {
            this.$http = $http;
            this.isSubmited = false;
            this.mocktest = {
                title: 'SBI PO online exam',
                questions: [{
                    questionId: '123',
                    questionInstruction: 'క్రింది వాటిలో సరైన జవాబును ఎంచుకోండి',
                    questionInfo: '',
                    question: '<b>భారత</b> రాజ్యాంగంలో ఏకపార్టీ అధికారాన్ని తుడిచిపెట్టిన సాధారణ ఎన్నికలు? ',
                    questionType: 'mcss',
                    options: [{
                        optionId: '1',
                        optionText: 'మూడో',
                        isAns:false
                    }, {
                        optionId: '2',
                        optionText: 'నాలుగవ',
                        isAns:false
                    }, {
                        optionId: '3',
                        optionText: 'ఆరవ',
                        isAns:true
                    },{
                        optionId: '4',
                        optionText: '8వ',
                        isAns:false
                    }]
                }, {
                    questionId: '124',
                    questionInstruction: 'క్రింది వాటిలో సరైన జవాబును ఎంచుకోండి  ',
                    questionInfo: '',
                    question: 'ఈ దశాబ్దంలో భారత రాజ్యాంగం అధ్యక్ష తరహా ప్రభుత్వం ఏర్పాటు చేయాలని ప్రతిపాదనలు పెరిగాయి?',
                    questionType: 'mcss',
                    options: [{
                        optionId: '1',
                        optionText: '1960-70',
                        isAns:false
                    }, {
                        optionId: '2',
                        optionText: '1980-90',
                        isAns:false
                    }, {
                        optionId: '3',
                        optionText: '1990-2000',
                        isAns:true
                    }, {
                        optionId: '4',
                        optionText: '2000-2010',
                        isAns:false
                    }]
                }, {
                    questionId: '125',
                    questionInstruction: 'క్రింది వాటిలో సరైన జవాబును ఎంచుకోండి',
                    questionInfo: '',
                    question: 'మనదేశంలో ఏర్పాటయిన ఏకైక జాతీయ ప్రభుత్వానికి నాయకత్వం వహించింది?',
                    questionType: 'mcss',
                    options: [{
                        optionId: '1',
                        optionText: 'జవహర్లాల్ నెహ్రూ',
                        isAns:true
                    }, { 
                        optionId: '2',
                        optionText: 'ఇందిరాగాంధీ',
                        isAns:false
                    }, {
                        optionId: '3',
                        optionText: 'మొరార్జీ దేశాయ్',
                        isAns:false
                    }, {
                        optionId: '4',
                        optionText: 'చరణ్ సింగ్',
                        isAns:false
                    }]
                }],
                duration: new Date().getTime()
            };
            this.currentQuestion = 0;
            $http.get('/api/exams/1', function(response) {
                console.log(response);
            });
        }
        getQuestoin(index, questionId) {
            this.currentQuestion = index;
            this.$http.get('/api/questions/'+questionId,function(response){
                console.log(response);
            });
        }
        showResult() {
            if(this.exam.questions.length-1===this.currentQuestion){
               // alert('No more questions!');
            }else{
                this.currentQuestion++;                
            }
        }
        resetCurrentQuestion() {
            this.exam.questions[this.currentQuestion].ans = '';
        }
        showResult() {
            this.isSubmited = true;
        }
        resetAllSelection() {
            this.isSubmited = false;
        }
    }

    angular.module('authCellApp')
        .component('mocktest', {
            templateUrl: 'app/mocktest/mocktest.html',
            controller: mocktestComponent,
            controllerAs: 'mocktestCtrl'
        });

})();
