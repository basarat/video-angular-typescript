module Controllers{
    export class MainController{
        message = "asdf";
        constructor($scope,logService:LogService){
            $scope.vm = this;
            logService.log('Some log');
        }
    }
}