'use strict';

(function() {

    class ExamcenterComponent {
        constructor() {
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
        }
        getQuestoin(question) {
            this.currentQuestion = question;
        }
    }

    angular.module('authCellApp')
        .component('examcenter', {
            templateUrl: 'app/examcenter/examcenter.html',
            controller: ExamcenterComponent,
            controllerAs: 'examcenterCtrl'
        });

})();
