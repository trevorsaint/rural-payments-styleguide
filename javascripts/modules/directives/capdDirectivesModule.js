define(
    [
        'angular'
        , './capdHello'
        , './capdTabs'
        , './capdTabsTab'
    ]
    , function
        (
          angular
          , capdHello
          , capdTabs
          , capdTabsTab
        )
    {
        var capdDirectivesModule = angular.module('capd.directives', []);
        capdDirectivesModule.directive('capdHello', capdHello);
        capdDirectivesModule.directive('capdTabs', capdTabs);
        capdDirectivesModule.directive('capdTabsTab', capdTabsTab);

    })