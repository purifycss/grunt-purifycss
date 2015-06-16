# grunt-purifycss

> Clean unnecessary CSS

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-purifycss --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-purifycss');
```

## The "purifycss" task

### Options

#### options.separateFiles
Type: `Boolean` Default value: `false`
Boolean value that tells the task whether or not you want to maintain separate files for each `.css` file input

#### options.prefix
Type: `String` Default value: `pure-`
A string value that, if you have chosen `separateFiles: true`, will prepend each new output `.css` file with a prefix 

### Usage Examples

In this example, the default options are to specify a target with src files, style files, and an output destination. The plugin will search for style selectors used in the source files, and then output a trimmed down style sheet.

```js
grunt.initConfig({
  purifycss: {
    options: {},
    target: {
      src: ['test/fixtures/*.html', 'test/fixtures/*.js'],
      css: ['test/fixtures/*.css'],
      dest: 'tmp/purestyles.css'
    },
  },
});
```

In this example, options are set to separateFiles with a prefix.  Please note, a destination folder is still expected, but a filename should not be included.

```js
grunt.initConfig({
  purifycss: {
    options: {
      separateFiles: true,
      prefix: 'purifiedcss-'
    },
    target: {
      src: ['test/fixtures/*.html', 'test/fixtures/*.js'],
      css: ['test/fixtures/*.css'],
      dest: 'tmp/'
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
