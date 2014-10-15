define(
    [
        'angular'
        , './capdHello'
        , './capdTabs'
        , './capdTabsTab'
        , './capdBlockLabel'
    ]
    , function
        (
          angular
          , capdHello
          , capdTabs
          , capdTabsTab
          , capdBlockLabel
        )
    {
        var capdDirectivesModule = angular.module('capd.directives', []);
        capdDirectivesModule.directive('capdHello', capdHello);
        capdDirectivesModule.directive('capdTabs', capdTabs);
        capdDirectivesModule.directive('capdTabsTab', capdTabsTab);
        capdDirectivesModule.directive('blockLabel', capdBlockLabel);
    })