define(['angularMocks', 'angular', 'modules/styleguide/capdStyleguideModule'],
    function(angularMocks, angular){
        describe('capdPageSelector', function(){
            var $scope;
            var $controller;

            beforeEach(module('capd.styleguide'));

            function buildController() {
                $controller('capdPaginatorController', {$scope: $scope});
            }

            beforeEach(inject(function(_$controller_, $rootScope){
                $controller = _$controller_;
                $scope = $rootScope.$new();
            }))

            describe('when pages range 1-10', function(){
                beforeEach(function(){
                    $scope.currentPage = 1;
                    $scope.pagesCount = 10;
                    buildController();
                })

                it('increments current page when user clicks on next button', function(){
                    $scope.nextPage();
                    expect($scope.currentPage).toEqual(2);
                });

                it('decrements current page when user clicks on previous button', function(){
                    $scope.currentPage = 2;
                    $scope.previousPage();
                    expect($scope.currentPage).toEqual(1);
                })

                it('will not allow user to go below page 1', function(){
                    $scope.previousPage();
                    expect($scope.currentPage).toEqual(1);
                })

                it('will not allow user to go above pagesCount', function(){
                    $scope.currentPage = 10;
                    $scope.nextPage();
                    expect($scope.currentPage).toEqual(10);
                })

                it('allows user to go to arbitrary page', function(){
                    $scope.goToPage(5);
                    expect($scope.currentPage).toEqual(5);
                })
            })

            describe('when pages are 1-5-10', function(){
                beforeEach(function(){
                    $scope.currentPage = 5;
                    $scope.pagesCount = 10;
                    buildController();
                })

                it('generates 5 virtual pages', function(){
                    $scope.currentPage = 5;
                    expect($scope.virtualPages).toEqual([3,4,5,6,7]);
                })
            })

            describe('when pages are 1-1-10', function(){
                beforeEach(function(){
                    $scope.currentPage = 1;
                    $scope.pagesCount = 10;
                    buildController();
                })

                it('generates 5 virtual pages', function(){
                    expect($scope.virtualPages).toEqual([1,2,3,4,5]);
                })
            })

            describe('when pages are 1-10-10', function(){
                beforeEach(function(){
                    $scope.currentPage = 10;
                    $scope.pagesCount = 10;
                    buildController();
                })

                it('generates 3 virtual pages', function(){
                    expect($scope.virtualPages).toEqual([6,7,8,9,10]);
                })
            })

            describe('when pages are 1-2-3', function(){
                beforeEach(function(){
                    $scope.currentPage = 2;
                    $scope.pagesCount = 3;
                    buildController();
                })

                it('generates 3 virtual pages', function(){
                    expect($scope.virtualPages).toEqual([1,2,3]);
                })
            })

            describe('when pages are 1-1-1', function(){
                beforeEach(function(){
                    $scope.currentPage = 1;
                    $scope.pagesCount = 1;
                    buildController();
                })

                it('generates 1 virtual page', function(){
                    expect($scope.virtualPages).toEqual([1]);
                })
            })

            describe('page size info', function(){
                beforeEach(function(){
                    $scope.pagesCount = 5;
                    $scope.pageSize = 10;
                    $scope.totalElements = 42;
                })

                it('should display page range correctly', function(){
                    $scope.currentPage = 1;
                    buildController();
                    expect($scope.pageSizeInfo).toEqual({
                        leftBound: 1,
                        rightBound: 10
                    })
                })

                it('for last page high bound of page range should be correct', function(){
                    $scope.currentPage = 5;
                    buildController();
                    expect($scope.pageSizeInfo).toEqual({
                        leftBound: 41,
                        rightBound: 42
                    })
                })
            })

        });
    }
);