/*
 * grunt-purifycss
 * https://github.com/purifycss/grunt-purify-css
 *
 * Copyright (c) 2015 Phoebe Li, Matthew Rourke, Kenny Tran
 * Licensed under the MIT license.
 */

'use strict';

var glob = require('glob');
var purify = require('purify-css');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('purifycss', 'Clean unnecessary CSS', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    });

    var src = [];
    this.data.src.forEach(function(pathPattern) {
      var files = glob.sync(pathPattern);
      console.log("glob files: ", files);
      src = src.concat(files);
    });

    var styles = [];
    this.data.css.forEach(function(pathPattern) {
      var files = glob.sync(pathPattern);
      console.log("glob styles: ", files);
      styles = styles.concat(files);
    })

    console.log(src);
    console.log(styles);

    var pure = purify(src, styles, {write: false, info: true});

    grunt.file.write(this.data.dest, pure);
    grunt.log.writeln('File "' + this.data.dest + '" created.');
  });

};
