define(['jquery','jquery-trap-input'], function ($) {
    var PinfDialog = function ($templateCache, $http, $q, $controller, $compile) {
        var currentDialog = null;
        var self = this;

        function getDialogTemplate(templateUrl) {
            var dialogTemplate = $templateCache.get(templateUrl);

            if (!dialogTemplate) {
                return $http
                    .get(templateUrl)
                    .then(function (response) {
                        var templateResponse = response.data;
                        $templateCache.put(templateUrl, templateResponse);
                        return templateResponse;
                    })
            }
            else {
                var deferred = $q.defer();
                deferred.resolve(dialogTemplate);
                return deferred.promise;
            }
        }

        function documentKeyUp(e){
            if (e.keyCode == 27) {
                self.close();
            }
        }

        function createAndShowDialog(template) {
            var dialog = $(template);
            $('body').append(dialog);
            dialog.attr('aria-hidden', 'false');
            return dialog;
        }

        function bindHandlers(dialog) {
            dialog.find('button.dialog-close').click(close);
            dialog.click(close);
            dialog.find('.dialog-holder').click(function (e) {
                e.stopPropagation();
            })
            var doc = $(document);
            doc.bind('keyup', documentKeyUp);
        }

        this.open = function (scope, settings) {
            getDialogTemplate(settings.templateUrl)
                .then(function (template) {
                    var dialog = createAndShowDialog(template);

                    dialog.find('.dialog-content').focus().attr('tabindex', '-1');
                    dialog.trap();

                    bindHandlers(dialog);
                    currentDialog = dialog;

                    var childScope = scope.$new(false);

                    if(settings.injectClose){
                        childScope.close = close
                    }

                    var controller = $controller(settings.controller || function() {}, {
                        $scope : childScope
                    });


                    $compile(dialog)(childScope)

                });
        }

        this.close = function(){
            var doc = $(document);

            currentDialog.untrap();
            currentDialog.attr('aria-hidden','true');
            currentDialog.remove();
            doc.unbind('keyup', documentKeyUp);
            currentDialog = null;
        }

        var close = self.close.bind(self);
    }

    PinfDialog.$inject = ['$templateCache', '$http', '$q', '$controller', '$compile'];

    return PinfDialog;
});