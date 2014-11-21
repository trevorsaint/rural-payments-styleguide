define(['./capdTabsConstants'],function (capdTabsConstants) {
    var capdTabs = function ($rootScope) {
        return {
            templateUrl: '/javascripts/modules/directives/views/capd-tabs-template.html',
            link: function postLink(scope, iElement, iAttrs, controller, transcludeFn) {
                transcludeFn(function(transClone){
                    var tabListUl = iElement.find('ul.tabs-list');
                    var tabsHeaders = transClone.filter('[capd-tabs-header]');
                    tabListUl.append(tabsHeaders);

                    var tabs = transClone.filter('[capd-tabs-tab]');
                    iElement.find('.tabs-content').append(tabs);
                })

                scope.changeTab(scope.tabIndex);
            },
            restrict: 'A',
            transclude: true,
            scope: {

            },
            controller: ['$scope', '$element', '$attrs', '$transclude', '$rootScope'
                , function ($scope, $element, $attrs, $transclude, $rootScope) {
                $scope.tabIndex = Number($attrs['capdTabsIndex'] || 0);

                var tabsCount = 0;
                var headersCount = 0;

                    function registrationInfo(itemsCount) {
                        return {index: itemsCount - 1, masterScope: $scope};
                    }

                    this.registerTab = function(){
                        tabsCount++;
                        return registrationInfo(tabsCount);
                    }

                this.registerHeader = function(){
                    headersCount++;
                    return registrationInfo(headersCount);
                }

                $scope.changeTab = function(newIndex){
                    $scope.tabIndex = newIndex;
                    $scope.$broadcast(capdTabsConstants.TAB_CHANGED_EVENT, newIndex);
                }
            }]
        }

        capdTabs.$inject = ['$rootScope'];


    }

    return capdTabs;
});