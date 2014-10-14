define(function () {
    var capdBlockLabel = function () {
        return {
            template : '',
            link: function postLink(scope, iElement, iAttrs) {

            },
            restrict : 'C',
            transclude: false,
            scope : {
                attribute_binding: '@',
                delegate_binding: '&',
                two_way_binding: '='
            },
            controller: function($scope, $element, $attrs, $transclude){
                var checkbox = $element.find('input[type=checkbox]');
                var radio = $element.find('input[type=radio]');
//
//                var changeHandler = function (input) {
//                    return function () {
//                        if (input.is(':checked')) {
//                            $element.addClass('selected');
//                        }
//                        else {
//                            $element.removeClass('selected');
//                        }
//                    }
//                }

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

                    debugger;

                    var inputsFromGroupExcludingSelf = inputsFromGroup.not(radio);
                    inputsFromGroupExcludingSelf.remove

                    if (radio.is(':checked')) {
                        $element.addClass('selected');
                    }
                    else {
                        $element.removeClass('selected');
                    }
                });
            }
        }
    }

    capdBlockLabel.$inject = [];

    return capdBlockLabel;
});