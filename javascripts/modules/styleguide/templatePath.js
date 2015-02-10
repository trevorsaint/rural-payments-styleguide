define(function(){
    var TEMPLATE_BASE_PATH = '';

    function templatePath(path){
        return TEMPLATE_BASE_PATH + path;
    }

    return templatePath;
})