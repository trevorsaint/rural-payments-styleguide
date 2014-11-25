define(
    [
        'angular'
        , './capdHello'
        , './capdTabs'
        , './capdTabsTab'
        , './capdBlockLabel'
        , './capdTabsHeader'
        , './capdCollapsible'
    ]
    , function
        (
          angular
          , capdHello
          , capdTabs
          , capdTabsTab
          , capdBlockLabel
          , capdTabsHeader
          , capdCollapsible
        )
    {
        var capdDirectivesModule = angular.module('capd.directives', []);
        capdDirectivesModule.directive('capdHello', capdHello);
        capdDirectivesModule.directive('capdTabs', capdTabs);
        capdDirectivesModule.directive('capdTabsTab', capdTabsTab);
        capdDirectivesModule.directive('blockLabel', capdBlockLabel);
        capdDirectivesModule.directive('blockList', capdBlockLabel);
        capdDirectivesModule.directive('capdTabsHeader', capdTabsHeader);
        capdDirectivesModule.directive('collapsibleItem', capdCollapsible);
    })