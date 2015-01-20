define(['lodash'],function (_) {
    // @ngInject
    var capdBlockLabel = function () {
        return {
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

                    // because of this line radios gray out each other
                    // we can try removing this line anr relying on angular to notify all radios
                    // from group and then every radio can take care of itself in terms of highlighting or graying
                    var inputsFromGroupExcludingSelf = inputsFromGroup.not(radio);
//                    inputsFromGroupExcludingSelf.closest('label.block-label').removeClass('selected');


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

                var propertiesToWatch = inputs.map(function(){
                    return $(this).attr('ng-model');
                })

                Array.prototype.push.apply(propertiesToWatch, inputs.map(function(){
                    return $(this).attr('ng-checked');
                }))

                function propertyChanged(){
                    setTimeout(function(){
                        inputs.trigger('change');
                    },0 );
                }

                _.forEach(propertiesToWatch, function(property){
                    $scope.$watch(property, propertyChanged);
                })

                propertyChanged();
            }
        }
    }

    return capdBlockLabel;
});