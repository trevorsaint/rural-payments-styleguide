define(['./capdTabsConstants'], function (capdTabsConstants) {
    // @ngInject
    var capdTabsHeader = function ($rootScope) {
        return {
            templateUrl: '/assets/javascripts/modules/styleguide/views/capd-tabs-header-template.html',
            link: function postLink(scope, iElement, iAttrs, capdTabsController) {
                var registrationInfo = capdTabsController.registerHeader();
                scope.index = registrationInfo.index;
                scope.isActive = scope.index % 2 == 0;

                scope.selectTab = function (index) {
                    registrationInfo.masterScope.$broadcast(capdTabsConstants.TAB_CHANGED_EVENT, index);
                }

                registrationInfo.masterScope.$on(capdTabsConstants.TAB_CHANGED_EVENT, function (event, currentIndex) {
                    scope.isActive = scope.index === currentIndex;
                })
            },
            restrict: 'A',
            transclude: true,
            replace: true,
            scope: {
                attribute_binding: '@',
                delegate_binding: '&',
                two_way_binding: '='
            },
            require: '^^capdTabs',
            controller: /* @ngInject */ function ($scope, $element, $attrs, $transclude) {

            }
        }
    }

    return capdTabsHeader;
});