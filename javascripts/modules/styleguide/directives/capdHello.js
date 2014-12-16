define(function () {
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
            controller: function($scope, $element, $attrs, $transclude){

            }
        }
    }

    helloDirective.$inject = [];

    return helloDirective;
});