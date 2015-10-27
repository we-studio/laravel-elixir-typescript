var gulp = require('gulp');
var elixir = require('laravel-elixir');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var _ = require('underscore');

var Task = elixir.Task;

elixir.extend('typescript', function (output, dest, options) {

    var pluginName = 'typescript';
    var search = '**/*.+(ts)';
    var assetPath = './' + elixir.config.assetsPath;

    options = _.extend({
        sortOutput: true
    }, options);

    new Task(pluginName, function () {
        var tsResult = gulp.src(assetPath + '/**/*.ts')
            .pipe(ts(options, undefined)).on('error', function(e) {
                new elixir.Notification().error(e, 'TypeScript Compilation Failed!');
                this.emit('end');
            });
        return tsResult
            .pipe(concat(output))
            .pipe(gulp.dest(dest || './public/js/app.js'))
            .pipe(new elixir.Notification('TypeScript Compiled!'));
    })
        .watch(assetPath +  '/typescript/**');
});
