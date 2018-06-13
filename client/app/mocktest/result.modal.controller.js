'use strict';
class modalInstanceCtrl{
    constructor($uibModalInstance, mocktest){
        angular.extend(this,{$uibModalInstance, mocktest});
        this.correctQuesCount = 0;
        for(let i=0;i<this.mocktest.questions.length;i++){
            let userAns = this.mocktest.questions[i].userAns;
            if(userAns&&this.mocktest.questions[i].options[userAns].isAns){
                this.correctQuesCount++;
            }
        }
        this.percent = parseInt((this.correctQuesCount*100)/this.mocktest.questions.length);
    }
    ok() {
        this.$uibModalInstance.close();
    }
}
angular.module('authCellApp').controller('modalInstanceCtrl', modalInstanceCtrl);
