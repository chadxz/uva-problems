module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      all: {
        src: ['problems/**/*.js']
      }
    },
    mochaTest: {
      test: {
        options: {
          ui: 'bdd',
          reporter: 'spec'
        },
        src: ['problems/**/*_test.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      all: {
        files: '<%= jshint.all.src %>',
        tasks: ['jshint:all', 'mochaTest']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Default task.
  grunt.registerTask('default', ['jshint', 'mochaTest']);

};
