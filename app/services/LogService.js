var LogService = (function () {
    function LogService($http) {
        this.$http = $http;
    }
    LogService.prototype.log = function (msg) {
        console.log(msg);
    };
    LogService.$inject = ['$http'];
    return LogService;
})();

services.service('logService', LogService);
//@ sourceMappingURL=LogService.js.map
