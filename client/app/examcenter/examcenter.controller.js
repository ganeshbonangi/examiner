'use strict';

(function() {

    class ExamcenterComponent {
        constructor($http, $stateParams) {
            this.$http = $http;
            console.log($stateParams.examId)
            this.exam = {
                title: 'SBI PO online exam',
                questions: [{
                    questionId: '123',
                    questionInstruction: 'Select <b>one</b> answer from the below options',
                    questionInfo: '',
                    question: 'This is <i style="font-size:30px;">question</i>1 ',
                    questionType: 'mcss',
                    options: [{
                        optionId: '1',
                        optionText: 'opt<b style="font-size:30px;">ion</b> a'
                    }, {
                        optionId: '2',
                        optionText: 'option b'
                    }, {
                        optionId: '3',
                        optionText: 'option c'
                    }]
                }, {
                    questionId: '124',
                    questionInstruction: 'Select <b>one</b> answer from the below options  ',
                    questionInfo: '',
                    question: 'This is <i>question</i> 2 <ul><li>Coffee</li><li>Tea</li><li>Milk</li></ul>',
                    questionType: 'mcss',
                    options: [{
                        optionId: '1',
                        optionText: 'option a'
                    }, {
                        optionId: '2',
                        optionText: 'option b'
                    }, {
                        optionId: '3',
                        optionText: 'option c'
                    }]
                }, {
                    questionId: '125',
                    questionInstruction: 'Select <b>one</b> answer from the below options',
                    questionInfo: '',
                    question: 'This is <i>question</i> 3',
                    questionType: 'mcss',
                    options: [{
                        optionId: '1',
                        optionText: 'option a  <img src="data:image/jpeg;base64,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" />'
                    }, {
                        optionId: '2',
                        optionText: 'option b'
                    }, {
                        optionId: '3',
                        optionText: 'option c'
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
        saveNdNext() {
            if(this.exam.questions.length-1===this.currentQuestion){
               // alert('No more questions!');
            }else{
                this.currentQuestion++;                
            }
        }
        resetCurrentQuestion() {
            this.exam.questions[this.currentQuestion].ans = '';
        }
    }

    angular.module('authCellApp')
        .component('examcenter', {
            templateUrl: 'app/examcenter/examcenter.html',
            controller: ExamcenterComponent,
            controllerAs: 'examcenterCtrl'
        });

})();
