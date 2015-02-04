define([
        'angularMocks'
        , 'modules/styleguide/capdStyleguideModule'
    ],
    function () {

        describe('capdDatePicker service,', function () {

            var capdDatePickerService, date;

            beforeEach(module('capd.styleguide'));

            beforeEach(inject(function ($injector) {
                capdDatePickerService = $injector.get('capdDatePickerService');
            }));

            describe('getDays method,', function () {

                it('should return date range from 0 to 31 by default when no arguments are provided', function () {
                    var result = capdDatePickerService.getDays();
                    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);
                });

                it('should return date range from 0 to 31 for given month/year', function () {
                    var result = capdDatePickerService.getDays(1, 2014);
                    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);
                });

                it('should return date range from 0 to 29 if February is a leap year', function () {
                    var result = capdDatePickerService.getDays(2, 2000);
                    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]);
                });

                it('should return date range from 0 to 28 if February is not a leap year', function () {
                    var result = capdDatePickerService.getDays(2, 2013);
                    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
                });
            });
        });
    });
