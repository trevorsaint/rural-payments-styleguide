define(function () {
    /* @ngInject */
    var capdDatePickerService = function () {

        var self = this;

        /**
         * Returns the number of days in the specified month and year.
         */
        function daysInMonth(month, year) {
            return new Date(year, month, 0).getDate();
        }

        /**
         * Returns the day range in the specified month and year.
         */
        function getDays(month, year) {
            if ((month == undefined) || (year == undefined)) {
                return _.range(1, 32);
            }
            return _.range(1, daysInMonth(month, year) + 1)
        }

        return {
            getDays: getDays,
            get: function (name) {
                return self[name];
            }
        };
    };

    return capdDatePickerService;
});
