define(['moment'], function (moment) {
    /* @ngInject */
    var capdDatePickerController = function ($scope, capdDatePickerService, capdConfig) {

        // Set up arrays of values
        $scope.days = capdDatePickerService.getDays();
        $scope.dateFields = {day: "", month: "", year: ""};

        $scope.$watch('model', function (newDate) {
            if (newDate) { // normally can be undefined, ie8 passes empty string on first choice!
                if (!isNaN(Number(newDate))) {
                    newDate = Number(newDate);
                }

                var date = moment(newDate);
                $scope.dateFields.month = date.month() + 1;
                $scope.dateFields.year = date.year();

                $scope.days = capdDatePickerService.getDays($scope.dateFields.month, $scope.dateFields.year);
                $scope.dateFields.day = date.date();
            }
        });

        $scope.dateChanged = function () {
            if ($scope.dateFields.day && $scope.dateFields.month && $scope.dateFields.year) {
                correctDate();
                var date = moment.utc([$scope.dateFields.year, $scope.dateFields.month - 1, $scope.dateFields.day]);
                if (date.tz) {
                    date = date.tz(capdConfig.defaultTimeZone);
                }
                $scope.model = date.toDate();
            } else {
                //don't propagate info until all data is set
                $scope.model = "";
            }
        };

        var correctDate = function () {
            $scope.dateFields.day = correctDay($scope.dateFields.day, $scope.dateFields.month, $scope.dateFields.year);
        };

        var correctDay = function (day, month, year) {
            $scope.days = capdDatePickerService.getDays(month, year);
            if (day > _.max($scope.days)) {
                return _.max($scope.days);
            } else if (day < 1) {
                return "";
            } else {
                return day;
            }
        };
    };

    return capdDatePickerController;
});
