# grunt-purifycss

Clean unnecessary CSS with [PurifyCSS](https://github.com/purifycss/purifycss)

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

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
