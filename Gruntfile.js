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
				'assets/stylesheets/main.css' : 'assets/sass/main.scss'
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


		sass: {

			files: ['assets/sass/**/*.scss'],
			tasks: ['sass'],

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

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Register task(s)

  grunt.registerTask('default', ['sass', 'connect', 'watch']);


};