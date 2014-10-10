define(function () {
    var capdTabsTab = function () {
        return {
            template: '<div ng-show="isVisible"><div ng-transclude></div></div>',
            link: function postLink(scope, iElement, iAttrs, capdTabs) {
                var tabName = iAttrs['capdTabsTab'];

                scope.isVisible = false;

                capdTabs.registerTab({name: tabName, tabChanged: function(tabVisible){
                    scope.isVisible = tabVisible;
                }});
            },
            restrict : 'A',
            transclude: true,
            scope : {},
            require : '^^capdTabs',
            controller: function($scope, $element, $attrs, $transclude){

            }
        }
    }

    capdTabsTab.$inject = [];

    return capdTabsTab;
});