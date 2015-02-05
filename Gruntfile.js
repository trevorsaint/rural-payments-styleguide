'use strict';


var path = require('path');


module.exports = function (grunt) {


    // configurations
    grunt.initConfig({


        pkg: grunt.file.readJSON('package.json'),


        // express
        express: {

            dev: {

                options: {
                    script: 'app.js',
                    port: 3000
                }

            }

        },


        // handlebars
        handlebars: {

            files: [ 'views/**/*.hbs' ]

        },


        // compass
        compass: {

            compile: {

                options: {
                    sassDir: 'assets/sass',
                    cssDir: 'assets/stylesheets',
                    config: 'config/config.rb'
                }

            }

        },


        // watch
        watch: {


            options: {
                livereload: true,
            },


            // express
            express: {

                files: [ 'app.js', 'Gruntfile.js', 'routes.js' ],
                tasks: [ 'express:dev' ],

                options: {
                    livereload: true,
                    spawn: false
                }

            },


            // handlebars
            handlebars: {

                files: [ 'views/**/*.hbs' ],
                task: [ 'handlebars'],

                options: {
                    livereload: true,
                    spawn: false
                }

            },


            // compass
            compass: {

                files: [ 'assets/sass/**/*.scss' ],
                tasks: [ 'compass' ],

                options: {
                    livereload: true,
                    spawn: false
                }

            }
        },
        karma: {
            dev: {
                configFile: 'tests/client/unit/unit-karma.conf.js'
            }
        }


    });



        // load the plugin that provides the express task(s)
    ['grunt-express-server',
        'grunt-contrib-handlebars',
        'grunt-contrib-compass',
        'grunt-contrib-watch',
        'grunt-karma'
    ].forEach(function (task) {
            grunt.loadNpmTasks(task);
        });


    // default task(s)
    grunt.registerTask('default', [ 'express:dev', 'handlebars', 'compass', 'watch' ]);


};