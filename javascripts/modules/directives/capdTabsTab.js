define(function () {
    var capdTabsTab = function () {
        return {
            link: function postLink(scope, iElement, iAttrs, capdTabs) {
                var tabName = iAttrs['capdTabsTab'];

                scope.tabChanged = function(isActive){

                }

                capdTabs.registerTab({name: tabName, tabChanged: scope.tabChanged});
            },
            restrict : 'A',
            transclude: false,
            scope : {},
            require : '^^capdTabs',
            controller: function($scope, $element, $attrs, $transclude){

//                debugger;
//                var tabName = $attrs['capd-tabs-tab'];
//                capdTabs.tabHeaders.push(tabName)
            }
        }
    }

    capdTabsTab.$inject = [];

    return capdTabsTab;
});