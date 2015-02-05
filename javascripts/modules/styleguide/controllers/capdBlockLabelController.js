define(['lodash'], function (_) {
    /* @ngInject */
    var capdBlockLabelController = function ($scope, $element, $attrs, $transclude) {
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
            if (radio.is(':checked')) {
                $element.addClass('selected');
            }
            else {
                $element.removeClass('selected');
            }
        });

        function toggleChecked(selector) {
            selector.trigger('click');
        }

        $element.not('label').click(function (event) {
            toggleChecked(checkbox);
            inputs.focus();
            inputs.trigger('change');
        });

        function preventPropagation(event) {
            event.stopPropagation();
        }

        $element.find('label').add(inputs).click(preventPropagation);

        inputs.focus(function () {
            $element.addClass('focused');
        });

        inputs.blur(function () {
            $element.removeClass('focused');
        });

        var attrsWithProperties = ['ng-model', 'ng-checked'],
            propertiesToWatch = [];

        attrsWithProperties.forEach(function(attr){
            var properties = inputs.map(function () {
                return $(this).attr(attr);
            });

            _.forEach(properties, function(prop){
                propertiesToWatch.push(prop);
            })
        });

        function propertyChanged() {
            setTimeout(function () {
                inputs.trigger('change');
            }, 0);
        }

        _.forEach(propertiesToWatch, function (property) {
            $scope.$watch(property, propertyChanged);
        });

        propertyChanged();
    };

    return capdBlockLabelController;
});
