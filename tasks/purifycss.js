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
    var options = this.options({write: false, info: true});

    var src = grunt.file.expand(this.data.src);
    grunt.verbose.writeln('Source files:', src);

    var styles = grunt.file.expand(this.data.css);
    grunt.verbose.writeln('Style files:', styles);

    var pure = purify(src, styles, options);

    grunt.file.write(this.data.dest, pure);
    grunt.log.writeln('File "' + this.data.dest + '" created.');
  });

};
