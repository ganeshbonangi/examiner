'use strict';

(function() {

    class ExamcenterComponent {
        constructor($http) {
            this.$http = $http;
            this.exam = {
                title: 'SBI online exam',
                questions: [{
                    questionId: '123',
                    questionInstruction: 'Select <b>one</b> answer from the below options',
                    questionInfo: '',
                    question: 'This is <i>question</i>1 ',
                    questionType: 'mcms',
                    options: [{
                        optionId: '1',
                        optionText: 'opt<b>ion</b> a'
                    }, {
                        optionId: '2',
                        optionText: 'option b'
                    }, {
                        optionId: '3',
                        optionText: 'option c'
                    }]
                }, {
                    questionId: '124',
                    questionInstruction: 'Select <b>one</b> answer from the below options',
                    questionInfo: '',
                    question: 'This is <i>question</i> 2',
                    questionType: 'mcms',
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
                    questionType: 'mcms',
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
                }],
                duration: new Date()
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
    }

    angular.module('authCellApp')
        .component('examcenter', {
            templateUrl: 'app/examcenter/examcenter.html',
            controller: ExamcenterComponent,
            controllerAs: 'examcenterCtrl'
        });

})();
