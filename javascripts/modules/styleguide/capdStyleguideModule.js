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
        , './directives/capdDatePicker'
        , './filters/capdPreformatted'
        , './services/capdDialog'
        , './services/capdDatePickerService'
        , './controllers/capdDatePickerController'
        , './controllers/capdBlockLabelController'
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
          , capdToggle
          , capdDatePicker
          , capdPreformatted
          , capdDialog
          , capdDatePickerService
          , capdDatePickerController
          , capdBlockLabelController
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
        capdDirectivesModule.directive('capdDatePicker', capdDatePicker);
        capdDirectivesModule.filter('capdPreformatted', capdPreformatted);
        capdDirectivesModule.service('capdDialog', capdDialog);
        capdDirectivesModule.service('capdDatePickerService', capdDatePickerService);
        capdDirectivesModule.controller('capdDatePickerController', capdDatePickerController);
        capdDirectivesModule.controller('capdBlockLabelController', capdBlockLabelController);
    });