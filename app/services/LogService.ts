/// <reference path="../reference.ts" />

class LogService {
    static $inject = ['$http'];
    constructor(public $http:ng.IHttpService) {
    }
    log(msg:any) {
        console.log(msg);
    }
}

services.service('logService', LogService);