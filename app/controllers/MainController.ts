/// <reference path="../reference.ts" />
module controllers{
    // Make sure you export ony controllers
    export class MainController {

        progress: number[] = [1, 20, 60];
        count: number = 0;
        message: string = "Some message";

        static $inject = ['$scope','logService']
        constructor($scope,public logService:LogService) {
            $scope.vm = this;
            logService.log('hello there');
        }

        change() {
            this.count = this.count + 1;
        }
    }
}

