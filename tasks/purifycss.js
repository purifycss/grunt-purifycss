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

  grunt.registerMultiTask('purifycss', 'Clean unnecessary CSS', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    });

    var src = [];
    this.data.src.forEach(function(pathPattern) {
      var files = glob.sync(pathPattern);
      console.log("Source Files: ", files);
      src = src.concat(files);
    });

     if (this.data.replace) {
      // Replace the css files that are given in css
      this.data.css.forEach(function(pathPattern) {
        var files = glob.sync(pathPattern);
        console.log("Style Files: ", files);
        files.forEach(function(file) {
          var purified = purify(src, [file], {write: false, info: true});
          grunt.file.write(file, purified);
          grunt.log.writeln('Css File "' + file + '" optimized.');
        });
      });

    } else {
      var styles = [];
      this.data.css.forEach(function(pathPattern) {
        var style = glob.sync(pathPattern);
        console.log("Style Files: ", style);
        styles = styles.concat(style);
      });

      var pure = purify(src, styles, {write: false, info: true});

      grunt.file.write(this.data.dest, pure);
      grunt.log.writeln('File "' + this.data.dest + '" created.');
    }
  });

};
