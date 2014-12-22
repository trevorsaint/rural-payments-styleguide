define(function () {
    // @ngInject
    var helloDirective = function () {
        return {
            template : '<strong>Hello {{name}}</strong>',
            link: function postLink(scope, iElement, iAttrs) {

            },
            restrict : 'A',
            transclude: false,
            scope : {
                name: '@capdHello'
            },
            controller: /* @ngInject */ function($scope, $element, $attrs, $transclude){

            }
        }
    }

    return helloDirective;
});