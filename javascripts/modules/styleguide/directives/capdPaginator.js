define(['../templatePath'],function (templatePath) {
    /* @ngInject */
    var capdPaginator = function () {
        return {
            templateUrl : templatePath('/javascripts/modules/styleguide/views/capd-paginator-template.html'),
            link: function postLink(scope, iElement, iAttrs) {
            },
            restrict: 'A',
            transclude: false,
            scope: {
                currentPage: '=',
                pagesCount: '=',
                displayPageOffset: '=?',
                startPage: '=?',
                scrollToElement: '@scrolltoid',
                totalElements: '=?',
                pageSize: '=?',
                itemLabel: '=?'
            },
            /* @ngInject */
            controller: 'capdPaginatorController'
        }
    }

    return capdPaginator;
});