define(function () {
    /* @ngInject */
    var capdPageSelector = function () {
        return {
            templateUrl : '/javascripts/modules/styleguide/views/capd-paginator-template.html',
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
            controller: 'capdPaginatorController'
        }
    }

    return capdPageSelector;
});