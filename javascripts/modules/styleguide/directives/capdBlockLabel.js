define(function () {
    /*@ngInject*/
    var capdBlockLabel = function () {
        return {
            restrict: 'C',
            transclude: false,
            controller: 'capdBlockLabelController'
        }
    };

    return capdBlockLabel;
});