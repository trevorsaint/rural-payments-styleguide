define(['jquery','jquery-trap-input'], function ($) {
    // @ngInject
    var PinfDialog = function ($templateCache, $http, $q, $controller, $compile) {
        var currentDialog, focusedElement, closeDeffered = null;
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

        /**
         * Opens new dialog.
         * @param scope
         * Scope of controller spawning dialog. This is important because dialog will have scope which is a child
         * of provided scope.
         *
         * @param settings
         * Setting object
         * controller : Function | String - controller that is going to be used in dialog. OPTIONAL
         * templateUrl : String - url to dialogs template
         * injectClose : Boolean - if this is true close() method will be injected to dialogs scope. OPTIONAL
         */
        this.open = function (scope, settings) {
            focusedElement = $(':focus');

            closeDeffered = $q.defer()

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

            return closeDeffered.promise;
        }

        /**
         * Closes currently opened dialog
         */
        this.close = function(result){
            var doc = $(document);

            currentDialog.untrap();
            currentDialog.attr('aria-hidden','true');

            closeDeffered.resolve(result);
            closeDeffered = null;

            currentDialog.remove();
            doc.unbind('keyup', documentKeyUp);
            currentDialog = null;

            focusedElement.focus();


        }

        var close = self.close.bind(self);
    }

    return PinfDialog;
});