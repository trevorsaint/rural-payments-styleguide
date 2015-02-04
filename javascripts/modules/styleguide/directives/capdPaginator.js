define(function () {
    /* @ngInject */
    var capdPageSelector = function () {
        return {
            template: '<ul class="pager">' +
                '<li><strong>Page {{currentPage + displayPageOffset}} of {{pagesCount}}</strong></li>' +
                '<li data-ng-hide="pagesCount==1" data-ng-class="{true: \'disabled\'}[ currentPage + displayPageOffset == startPage ]"><a data-ng-click="previousPage()">Prev</a></li>' +
                '<li data-ng-hide="pagesCount==1" data-ng-class="{true: \'disabled\'}[ currentPage + displayPageOffset == pagesCount ]"><a data-ng-click="nextPage()">Next</a></li>' +
                '</ul>',
            link: function postLink(scope, iElement, iAttrs) {
            },
            restrict: 'A',
            transclude: false,
            scope: {
                currentPage: '=',
                pagesCount: '=',
                displayPageOffset: '=?',
                startPage: '=?',
                scrollToElement: '@scrolltoid'
            },
            /* @ngInject */
            controller: function ($scope, $element, $attrs, $transclude) {

                $scope.displayPageOffset = $scope.displayPageOffset || 0;
                $scope.startPage = $scope.startPage || 1;
                //$scope.scrollToElement = $scope.scrollToElement || "";

                $scope.nextPage = function () {
                    var pageNum = $scope.currentPage + $scope.displayPageOffset;
                    if (pageNum != $scope.pagesCount) {
                        $scope.currentPage++;
                    }
                    if ($scope.scrollToElement != null && $scope.scrollToElement != undefined) {
                        document.getElementById($scope.scrollToElement).scrollIntoView();
                    }

                }

                $scope.previousPage = function () {
                    var pageNum = $scope.currentPage + $scope.displayPageOffset;
                    if (pageNum != $scope.startPage) {
                        $scope.currentPage--;
                    }
                    if ($scope.scrollToElement != null && $scope.scrollToElement != undefined) {
                        document.getElementById($scope.scrollToElement).scrollIntoView();
                    }
                }
            }
        }
    }

    return capdPageSelector;
});