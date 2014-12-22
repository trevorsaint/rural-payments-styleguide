define(['./capdTabsConstants'],function (capdTabsConstants) {
    var capdTabsTab = function () {
        return {
            template: '<div ng-show="isVisible" ng-transclude></div>',
            link: function postLink(scope, iElement, iAttrs, capdTabsController) {
                scope.isVisible = true;

                var registrationInfo = capdTabsController.registerTab();

                scope.index = registrationInfo.index;

                registrationInfo.masterScope.$on(capdTabsConstants.TAB_CHANGED_EVENT, function(event, currentIndex){
                    scope.isVisible = scope.index === currentIndex;
                })
            },
            restrict : 'A',
            transclude: true,
            scope : {},
            require : '^^capdTabs',
            controller: function($scope, $element, $attrs, $transclude){

            }
        }
    }

    return capdTabsTab;
});