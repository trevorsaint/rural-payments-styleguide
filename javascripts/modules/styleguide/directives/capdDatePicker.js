/**
 * A directive for embedding a date picker into your app.
 */

define(['../templatePath'],function (templatePath) {
    /* @ngInject */
    var capdDatePicker = function () {

        /** link functions **/
        function link(scope, element, attrs, ctrl) {
            var startYear = parseInt(attrs['startYear'], 10) || 1900;
            var endYearOffset = parseInt(attrs['endYearOffset'], 10) || 0;
            var endYear = attrs['endYear'] ? parseInt(attrs['endYear'], 10) : new Date().getFullYear() + endYearOffset;
            var name = attrs['name'];
            var required = attrs['required'] || attrs['ngRequired'];

            // don't allow the user to input anything else than numbers
            element.find("input").keypress(function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
            });

            var validator = function () {
                if ((scope.dateFields.day) && (scope.dateFields.month) && (scope.dateFields.year)) {
                    if (scope.dateFields.year < startYear) {
                        ctrl.$setValidity(name, false);
                    }
                    else {
                        ctrl.$setValidity('required', true);
                        ctrl.$setValidity(name, true);
                    }
                }
                else {
                    ctrl.$setValidity(name, true);
                }
            };

            scope.$watch('dateFields.day', function (newValue, oldValue) {
                if (fieldValueNotAllowed(newValue, oldValue)) {
                    scope.dateFields.day = oldValue;
                }
                validator();
            });

            scope.$watch('dateFields.month', function (newValue, oldValue) {
                if (fieldValueNotAllowed(newValue, oldValue)) {
                    scope.dateFields.month = oldValue;
                }
                validator();
            });

            scope.$watch('dateFields.year', function (newValue, oldValue) {
                if (fieldValueNotAllowed(newValue, oldValue)) {
                    scope.dateFields.year = oldValue;
                }
                else if (newValue > endYear) {
                    scope.dateFields.year = oldValue;
                }
                validator();
            });

            function didInputWatchChange(newValue, oldValue) {
                return (newValue === oldValue || newValue === null);
            }

            function fieldValueNotAllowed(newValue, oldValue) {
                if (didInputWatchChange(newValue, oldValue)) {
                    return;
                }
                if (!newValue) {
                    return (oldValue != null && !isNaN(oldValue));
                }
                return false;
            }
        }

        return {
            restrict: 'A',
            priority: 100,
            replace: true,
            require: 'ngModel',
            scope: {
                model: '=ngModel'
            },
            controller: 'capdDatePickerController',
            templateUrl: templatePath('/javascripts/modules/styleguide/views/date-picker-template.html'),
            link: link
        };
    };

    return capdDatePicker;
});
