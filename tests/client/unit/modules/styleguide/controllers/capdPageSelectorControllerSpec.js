define(['angularMocks', 'angular', 'utils/capdUtilsModule'],
    function(angularMocks, angular){
        describe('capdPageSelector', function(){
            var scope;
            var innerScope;
            var element;
            var html = '<div capd-page-selector current-page="1" pages-count="10"></div>'

            beforeEach(module('capd.utils'));

            beforeEach(inject(function($compile, $rootScope){
                scope = $rootScope.$new();
                element = angular.element(html);

                var compiled = $compile(element);
                compiled(scope);
                scope.$digest();

                innerScope = element.isolateScope();
            }))

            it('increments current page when user clicks on next button', function(){
                innerScope.nextPage();
                expect(innerScope.currentPage).toEqual(2);
            });

            it('decrements current page when user clicks on previous button', function(){
                innerScope.currentPage = 2;
                innerScope.previousPage();
                expect(innerScope.currentPage).toEqual(1);
            })

            it('will not allow user to go below page 1', function(){
                innerScope.previousPage();
                expect(innerScope.currentPage).toEqual(1);
            })

            it('will not allow user to go above pagesCount', function(){
                innerScope.currentPage = 10;
                innerScope.nextPage();
                expect(innerScope.currentPage).toEqual(10);
            })
        });
    }
);