module.exports = function(grunt) {


  // Project configuration

  grunt.initConfig({


    pkg: grunt.file.readJSON('package.json'),



	// Sass

	sass: {

		dist: {

			options: {
				style: 'compressed' // Nested, compact, compressed, expanded
			},

			files: {
				'stylesheets/application.css' : 'sass/application.scss'
			}

		}

	},


	// Connect

	connect: {

		server: {

			options: {
				port: 9000,
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


		sass: {

			files: ['sass/**/*.scss'],
			tasks: ['sass'],

			options: {
				livereload: true,
				spawn: false
			}

		},


		html: {

			files: ['index.html'],
			options: {
				livereload: true
			}

		}


	}


  });


  // Load plugins that provide the tasks

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Register task(s)

  grunt.registerTask('default', ['sass', 'connect', 'watch']);


};