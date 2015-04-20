'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

module.exports = function(options) {
  gulp.task('inject', ['scripts'], function () {
    var injectStyles = gulp.src([
      options.src + '/app/**/*.css'
    ], { read: false });

    var injectScripts = gulp.src([
      options.tmp + '/serve/app/**/*.js',
      '!' + options.src + '/app/**/*.spec.js',
      '!' + options.src + '/app/**/*.mock.js'
    ], { read: false });

    var injectOptions = {
      ignorePath: [options.src, options.tmp + '/serve'],
      addRootSlash: false
    };

    return gulp.src(options.src + '/*.html')
      .pipe($.inject(injectStyles, injectOptions))
      .pipe($.inject(injectScripts, injectOptions))
      .pipe(wiredep(_.extend({}, options.wiredep)))
      .pipe(gulp.dest(options.tmp + '/serve'));

  });
};
