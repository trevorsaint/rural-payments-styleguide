define(
    [
        'angular'
        , './capdHello'
    ]
    , function
        (
          angular
          , capdHello
        )
    {
        var capdDirectivesModule = angular.module('capd.directives', []);
        capdDirectivesModule.directive('capdHello', capdHello);

    })