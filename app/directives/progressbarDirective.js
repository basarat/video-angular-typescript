directives.directive('progressbar', [
    '$compile',
    function progressbarDirective($compile) {
        var _this = this;
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
            compile: function (element, attrs) {
                element.find('.btn').after('<div>{{msg}}</div>');

                return function (scope, element, attrs) {
                    // view -> vm
                    element.find('input').on('keyup', function () {
                        var val = $(this).val();
                        if (scope.value != val) {
                            scope.$apply(function () {
                                scope.value = val;
                            });

                            scope.$apply(function () {
                                scope.change();
                            });
                        }
                    });

                    // vm -> view
                    scope.$watch('value', function () {
                        element.find('input').val(scope.value);
                    });
                };
            }
        };
    }
]);
//@ sourceMappingURL=progressbarDirective.js.map
