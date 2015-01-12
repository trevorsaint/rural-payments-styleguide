define(function () {
    // @ngInject
    var capdBlockLabel = function () {
        return {
            template : '',
            link: function postLink($scope, $element, iAttrs) {

            },
            restrict : 'C',
            transclude: false,
            controller: /* @ngInject */ function($scope, $element, $attrs, $transclude){
                var checkbox = $element.find('input[type=checkbox]');
                var radio = $element.find('input[type=radio]');
                var inputs = radio.add(checkbox);

                checkbox.change(function () {
                    if (checkbox.is(':checked')) {
                        $element.addClass('selected');
                    }
                    else {
                        $element.removeClass('selected');
                    }
                });

                radio.change(function () {
                    var radioName = radio.attr('name');

                    var inputsFromGroup = $("input[name='" + radioName + "']");

                    var inputsFromGroupExcludingSelf = inputsFromGroup.not(radio);
                    inputsFromGroupExcludingSelf.closest('label.block-label').removeClass('selected');

                    if (radio.is(':checked')) {
                        $element.addClass('selected');
                    }
                    else {
                        $element.removeClass('selected');
                    }
                });

                function toggleChecked(selector){
                    selector.trigger('click');
                }

                $element.not('label').click(function(event){
                    toggleChecked(checkbox);
                    inputs.focus();
                    inputs.trigger('change');
                })

                function preventPropagation(event){
                    event.stopPropagation();
                }

                $element.find('label').add(inputs).click(preventPropagation);

                inputs.focus(function(){
                    $element.addClass('focused');
                })

                inputs.blur(function(){
                    $element.removeClass('focused');
                })
            }
        }
    }

    return capdBlockLabel;
});