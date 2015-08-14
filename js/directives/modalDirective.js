(function () {
    loveHateApp.directive('modal', function () {
        return {
            restrict: 'A',
            scope: {
                visible: '='
            },
            link: function (scope, element, attrs) {
                scope.$watch('visible', function (value, oldValue) {
                    if (value == true)
                        $(element).modal('show');
                    else
                        $(element).modal('hide');
                });

                $(element).on('shown.bs.modal', function () {
                    scope.$apply(function () {
                        scope.visible = true;
                    });
                });

                $(element).on('hidden.bs.modal', function () {
                    scope.$apply(function () {
                        scope.visible = false;
                    });
                });
            }
        };
    });

    loveHateApp.directive('modalContent', function () {
        return {
            restrict: 'E'
            , scope: {
                util: "="
            }
            , link: function (scope, elem, attrs) {
                console.log(scope.util);
            }

            , templateUrl: function (scope, element, attrs) {
                console.log(attrs.type);
                return 'templates/_modal-content-menu.html';
            }
        };
    });
})();