'use strict';
class modalInstanceCtrl{
    constructor($uibModalInstance, mocktest, $http, Auth){
        angular.extend(this,{$uibModalInstance, mocktest, $http, Auth});
        this.correctQuesCount = 0;
        for(let i=0;i<this.mocktest.questions.length;i++){
            let userAns = this.mocktest.questions[i].userAns;
            if(userAns&&this.mocktest.questions[i].options[userAns].isAns){
                this.correctQuesCount++;
            }
        }
        this.percent = parseInt((this.correctQuesCount*100)/this.mocktest.questions.length);
        this.feedToDb();
    }
    ok() {
        this.$uibModalInstance.close();
    }
    feedToDb(){
        let user = this.Auth.getCurrentUser()
        let obj = {
          examid: this.mocktest.examid,
          userid: user._id,
          duration: this.mocktest.duration,
          username: user.name,
          total:this.mocktest.questions.length,
          corrects:this.correctQuesCount,
          wrongs: (this.mocktest.questions.length-this.correctQuesCount)
        };
        this.$http.post('/api/reports/',obj).then((response)=>{
            console.log(response);
        });
    }
}
angular.module('authCellApp').controller('modalInstanceCtrl', modalInstanceCtrl);
