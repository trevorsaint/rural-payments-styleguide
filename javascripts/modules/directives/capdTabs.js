define(function () {
    var capdTabs = function () {
        return {
            templateUrl: '/javascripts/modules/directives/views/capd-tabs-template.html',
            compile: function compile(tElement, tAttrs, transclude) {
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, iElement, iAttrs, controller) {
                    }
                }
            },
            link: function postLink(scope, iElement, iAttrs) {

            },
            restrict: 'A',
            transclude: true,
            scope: {

            },
            controller: function ($scope, $element, $attrs, $transclude) {
                $scope.tabIndex = Number($attrs['capdTabsIndex'] || 0);
                $scope.tabs = [];

                function tabChanged(){
                    $scope.tabs.forEach(function(tab, index){
                        tab.tabChanged(index === $scope.tabIndex);
                    })
                }

                $scope.isTabSelected = function(index){
                    return index === $scope.tabIndex;
                }

                $scope.selectTab = function(index){
                    $scope.tabIndex = index;
                    tabChanged();
                }

                this.registerTab = function(tab){
                    $scope.tabs.push(tab);
                    var lastTabIndex = $scope.tabs.length - 1;
                    tab.tabChanged(lastTabIndex === $scope.tabIndex);
                }

                $scope.selectTab($scope.tabIndex);
            }
        }

        capdTabs.$inject = [];


    }

    return capdTabs;
});