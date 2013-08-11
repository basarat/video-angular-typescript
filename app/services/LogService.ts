class LogService{
    log(msg:any){
        console.log(msg);
    }
}
services.service('logService',LogService);