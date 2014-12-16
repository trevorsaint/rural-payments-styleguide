define(
    [
        'angular'
        , './directives/capdHello'
        , './directives/capdTabs'
        , './directives/capdTabsTab'
        , './directives/capdBlockLabel'
        , './directives/capdTabsHeader'
        , './directives/capdCollapsible'
        , './directives/capdToggle'
        , './filters/capdPreformatted'    ]
    , function
        (
          angular
          , capdHello
          , capdTabs
          , capdTabsTab
          , capdBlockLabel
          , capdTabsHeader
          , capdCollapsible
          , capdToggle
          , capdPreformatted
        )
    {
        var capdDirectivesModule = angular.module('capd.styleguide', []);
        capdDirectivesModule.directive('capdHello', capdHello);
        capdDirectivesModule.directive('capdTabs', capdTabs);
        capdDirectivesModule.directive('capdTabsTab', capdTabsTab);
        capdDirectivesModule.directive('blockLabel', capdBlockLabel);
        capdDirectivesModule.directive('blockList', capdBlockLabel);
        capdDirectivesModule.directive('capdTabsHeader', capdTabsHeader);
        capdDirectivesModule.directive('collapsibleItem', capdCollapsible);
        capdDirectivesModule.directive('toggle', capdToggle);
        capdDirectivesModule.filter('capdPreformatted', capdPreformatted);
    })