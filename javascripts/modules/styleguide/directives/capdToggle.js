define(function () {

    // @ngInject
    var capdToggle = function () {
        return {
            link: function postLink(scope, iElement, iAttrs) {
                var isExpanded = false;

                var toggleLink = iElement.find('.toggle-link');
                var toggleContent = iElement.find('.toggle-content');

                function updateElements() {
                    toggleLink.attr('aria-expanded', isExpanded.toString());
                    var isAriaHidden = !isExpanded;
                    toggleContent.attr('aria-hidden', isAriaHidden.toString());
                }

                toggleLink.click(function(){
                    isExpanded = !isExpanded;
                    updateElements();
                })

                updateElements();

            },
            restrict : 'C',
            transclude: false,
            controller: /* @ngInject */ function($scope, $element, $attrs, $transclude){

            }
        }
    }

    return capdToggle;
});