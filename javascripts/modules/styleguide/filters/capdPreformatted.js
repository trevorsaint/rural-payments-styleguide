define(function () {
    var capdPreformatted = function ($sce) {
        function escape(text){
            return text.
                replace(/&/g, '&amp;').
                replace(/</g, '&lt;').
                replace(/>/g, '&gt;').
                replace(/'/g, '&#39;').
                replace(/"/g, '&quot;');
        }

        return function(text){
            var textWithBrs = escape(text).replace(/\n/g, '<br/>');
            return $sce.trustAsHtml(textWithBrs);
        }
    }

    capdPreformatted.$inject = ['$sce'];

    return capdPreformatted;
});