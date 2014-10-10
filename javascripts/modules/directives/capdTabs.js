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
//                tabIndex: '=capdTabsIndex'
            },
            controller: function ($scope, $element, $attrs, $transclude) {
                $scope.tabIndex = Number($attrs['capdTabsIndex']);
                $scope.tabs = [];

                $scope.isTabSelected = function(index){
                    return index === $scope.tabIndex;
                }

                $scope.selectTab = function(index){
                    $scope.tabIndex = index;
                }

                this.registerTab = function(tab){
                    $scope.tabs.push(tab);
                }

                $scope.selectTab($scope.tabIndex);
            }
        }

        capdTabs.$inject = [];


    }

    return capdTabs;
});