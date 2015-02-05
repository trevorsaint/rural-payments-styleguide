var allTestFiles = [];
var TEST_REGEXP = /tests\/client\/unit\/.*Spec.js$/;

var pathToModule = function(path) {
    return path.replace(/^\/base\//, '../').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

(function(){
    var config = requirejsConfig()

    config.baseUrl = '/base/javascripts/'
    config.deps = allTestFiles

    config.callback = window.__karma__.start

    requirejs.config(config)

})()