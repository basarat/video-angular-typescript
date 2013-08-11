/// <reference path="../reference.ts" />
var controllers;
(function (controllers) {
    // Make sure you export ony controllers
    var MainController = (function () {
        function MainController($scope, logService) {
            this.logService = logService;
            this.progress = [1, 20, 60];
            this.count = 0;
            this.message = "Some message";
            $scope.vm = this;
            logService.log('hello there');
        }
        MainController.prototype.change = function () {
            this.count = this.count + 1;
        };
        MainController.$inject = ['$scope', 'logService'];
        return MainController;
    })();
    controllers.MainController = MainController;
})(controllers || (controllers = {}));
//@ sourceMappingURL=MainController.js.map
