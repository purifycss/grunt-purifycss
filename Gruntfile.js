/*
 * grunt-purifycss
 * https://github.com/purifycss/grunt-purify-css
 *
 * Copyright (c) 2015 Phoebe Li, Matthew Rourke, Kenny Tran
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    purifycss: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
      },
      custom_options: {
        options: {
          separator: ': ',
          punctuation: ' !!!'
        },
        files: {
          'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
        },
      },
      test: {
        src: ['test/fixtures/*.html'],
        css: ['test/fixtures/styles.css'],
        dest: 'tmp/purestyles.css'
      },
      goose: {
        src: [
          'Goose-Windmill/public/app/**/*.html', 
          'Goose-Windmill/public/app/**/*.js',
          'Goose-Windmill/public/index.html'
          ],
        css: ['Goose-Windmill/public/styles/*.css'],
        dest: 'tmp/gooseCSS.css'
      }
    },

    // Unit tests.grunt
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'purifycss:test', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['purifycss:test']);

};
