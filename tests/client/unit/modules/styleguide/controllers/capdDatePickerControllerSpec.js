define([
        'angularMocks'
        , 'modules/styleguide/capdStyleguideModule'
    ],
    function () {

        describe('capdDatePicker controller,', function () {

            var capdDatePickerController, $rootScope, scope, createController;

            beforeEach(module('capd.styleguide'));
            beforeEach(inject(function ($injector) {
            }));


            beforeEach(inject(function ($injector) {
                window.capd = {
                    config : {
                        defaultTimeZone : 'Europe/London'
                    }
                }

                $rootScope = $injector.get('$rootScope');
                scope = $rootScope.$new();
                var capdDatePickerService = $injector.get('capdDatePickerService');

                var $controller = $injector.get('$controller');

                createController = function (scope) {
                    return $controller('capdDatePickerController', {
                        '$scope': scope,
                        'capdDatePickerService': capdDatePickerService,
                        'capdConfig': {  defaultTimeZone: "Europe/London"}
                    });
                };

                scope.years = _.range(1900, 2500);

                capdDatePickerController = createController(scope);
            }));

            it("should get date from model and convert into day/month/year", function () {
                //given:
                scope.model = "2004-02-12T15:19:21+00:00";

                //when:
                scope.$apply();

                //then
                expect(scope.dateFields.year).toBe(2004);
                expect(scope.dateFields.month).toBe(2);
                expect(scope.dateFields.day).toBe(12);

                ////////////////
                //given:
                scope.model = "2005-03-28T03:01:45+01:00";

                //when:
                scope.$apply();

                //then
                expect(scope.dateFields.year).toBe(2005);
                expect(scope.dateFields.month).toBe(3);
                expect(scope.dateFields.day).toBe(28);
            });

            it("should set day field when changing month and day do not exist", function () {
                //given
                scope.dateFields.year = 2011;
                scope.dateFields.month = 1;
                scope.dateFields.day = 30;
                scope.years = [2011];
                scope.dateChanged();

                //when
                scope.dateFields.month = 2;
                scope.dateChanged();

                //then
                expect(scope.dateFields.year).toBe(2011);
                expect(scope.dateFields.month).toBe(2);
                expect(scope.dateFields.day).toBe(28);
            });

            it("should return empty value until all data is set", function () {
                //given
                capdDatePickerController = createController($rootScope.$new());
                scope.dateFields.month = 1;
                scope.dateFields.day = 30;

                //when
                scope.dateChanged();

                //then
                expect(scope.model).toBe("");
            })


            it("should return proper date value", function () {
                //given
                scope.dateFields.year = 2011;
                scope.dateFields.month = 1;
                scope.dateFields.day = 30;

                //when
                scope.dateChanged();

                //then
                expect(scope.model).toEqual(new Date("2011-01-30T00:00Z"));
            })
        });
    });
