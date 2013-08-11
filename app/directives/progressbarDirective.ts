/// <reference path="../reference.ts" />

interface X extends ng.IScope {
    value: any;
    change: Function;
}

directives.directive('progressbar', ['$compile', function progressbarDirective($compile: ng.ICompileService): ng.IDirective {
    console.log(progressbar.html);

    return {        
        restrict: 'EAC',
        template: progressbar.html,
        transclude: true,
        scope: {
            progress: "=",
            msg: "@",
            click: "&",
            value: "=",
            change: "&"
        },
        compile: (element, attrs) => {
            element.find('.btn').after('<div>{{msg}}</div>');

            return (scope: X, element: JQuery, attrs) => {
                // view -> vm 
                element.find('input').on('keyup', function () {
                    var val = $(this).val();
                    if (scope.value != val) {
                        scope.$apply(() => {
                            scope.value = val;
                        })

                        scope.$apply(() => {
                            scope.change();
                        });
                    }
                });

                // vm -> view 
                scope.$watch('value', () => {
                    element.find('input').val(scope.value);
                });
            };
        }
    }
}]);