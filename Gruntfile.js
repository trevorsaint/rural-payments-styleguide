module.exports = function(grunt) {


  // Project configuration

  grunt.initConfig({


    pkg: grunt.file.readJSON('package.json'),


  	// Compass

  	compass: {

  		compile: {

  		  options: {
      		sassDir: 'assets/sass',
      		cssDir:  'assets/stylesheets',
      		config:  'config/config.rb'
        }

  		}

  	},


  	// Connect

  	connect: {

  		server: {

  			options: {
  				port: 9100,
  				open: true,
  				livereload: 35729,
  				hostname: 'localhost'
  			}

  		}

  	},


  	// Watch

  	watch: {


  		options: {
  			livereload: true
  		},


  		compass: {

  			files: ['assets/sass/**/*.scss'],
  			tasks: ['compass'],

  			options: {
  				livereload: true,
  				spawn: false
  			}

  		},


  		html: {

  			files: ['*.html'],
  			options: {
  				livereload: true
  			}

  		}


  	}


  });


  // Load plugins that provide the tasks

  [
    'grunt-contrib-compass',
    'grunt-contrib-connect',
    'grunt-contrib-watch'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });


  // Register task(s)

  grunt.registerTask('default', ['compass', 'connect', 'watch']);


};