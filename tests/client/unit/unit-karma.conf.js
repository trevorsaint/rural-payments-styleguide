// karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: '../../../',
        frameworks: ['jasmine', 'requirejs'],
        files : [
            { pattern : 'javascripts/requirejsConfig.js' , included : true},
            { pattern : 'javascripts/**', included: false},
            { pattern : 'tests/client/unit/test-main.js' , included : true},
            { pattern : 'tests/client/unit/**/*Spec.js', included: false}
        ],
        exclude : ['**/main.js'],
        browsers : ['Chrome']
    });
};