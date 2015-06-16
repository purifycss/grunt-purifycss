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
var path = require('path');

module.exports = function(grunt) {

  grunt.registerMultiTask('purifycss', 'Clean unnecessary CSS', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
        separateFiles: false,
        prefix: 'pure-'
    });

    var createOutput = function(srcFiles, css, dest) {
      var destFile = '',
          styles = css;
      if (!Array.isArray(css)) styles = [css];

      var pure = purify(srcFiles, styles, {write: false, info: true});

      var ext = path.extname(dest);
      //if the path has an extension, then use that as the destination file
      if (ext) {
          destFile = dest;
      } else {
          destFile = dest + '/' + options.prefix + path.basename(css); 
      }

      grunt.file.write(path.normalize(destFile), pure);
      grunt.log.writeln('File "' + path.normalize(destFile) + '" created.');
    }

    var src = [];
    this.data.src.forEach(function(pathPattern) {
      var files = glob.sync(pathPattern);
      console.log("Source Files: ", files);
      src = src.concat(files);
    });

    var styles = [];
    this.data.css.forEach(function(pathPattern) {
      var style = glob.sync(pathPattern);
      console.log("Style Files: ", style);
      styles = styles.concat(style);
    });

    var dest = this.data.dest;
    if (options.separateFiles) {
        styles.forEach(function(style) {
            createOutput(src, style, dest);
        });
    } else {
        createOutput(src, styles, dest);
    }
  });

};


