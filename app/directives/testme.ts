/// <reference path="../reference.ts" />

directives.directive('testme',function():ng.IDirective{
    return {
        restrict:'EAC',
        template: testme.html
    }
})