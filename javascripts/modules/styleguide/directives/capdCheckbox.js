define(function () {
    // @ngInject
    var capdCheckbox = function () {
        return {
            template : '',
            link: function postLink(scope, iElement, iAttrs) {

            },
            restrict : 'A',
            transclude: false,
            scope : {
                attribute_binding: '@',
                delegate_binding: '&',
                two_way_binding: '='
            },
            controller: function($scope, $element, $attrs, $transclude){

            }
        }
    }

    return capdCheckbox;
});