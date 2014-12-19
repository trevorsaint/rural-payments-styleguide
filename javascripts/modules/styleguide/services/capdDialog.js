define(['jquery','jquery-trap-input'], function ($) {
    var PinfDialog = function ($templateCache, $http, $q) {
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

        function documentClick(){
            self.close();
        }

        function documentKeyUp(e){
            if (e.keyCode == 27) {
                self.close();
            }
        }

        function bindCloseToDocument(){
            var doc = $(document);
//            doc.bind('click', documentClick);
            doc.bind('keyup', documentKeyUp);
        }

        function unbindCloseFromDocument(){
            var doc = $(document);
//            doc.unbind('click', documentClick);
            doc.unbind('keyup', documentKeyUp);
        }

        this.open = function (scope, settings) {
            getDialogTemplate(settings.templateUrl)
                .then(function (template) {
                    var dialog = $(template);
                    $('body').append(dialog);
                    dialog.attr('aria-hidden','false');
                    dialog.trap();

                    var close = self.close.bind(self);

                    dialog.find('button.dialog-close').click(close);
                    dialog.click(close);

                    dialog.find('.dialog-holder').click(function(e){
                        e.stopPropagation();
                    })

                    currentDialog = dialog;

                    bindCloseToDocument();
                });
        }

        this.close = function(){
            currentDialog.untrap();
            currentDialog.attr('aria-hidden','true');
            currentDialog.remove();
            unbindCloseFromDocument();
            currentDialog = null;
        }
    }

    PinfDialog.$inject = ['$templateCache', '$http', '$q'];

    return PinfDialog;
});