'use strict';

var gulp   = require('gulp');
var path   = require('path');
var config = require('../config');
var $      = require('../plugins');

var glob = path.join(config.src, 'views', '**', '*.jade');

module.exports = function () {
  gulp.src(glob)
    .pipe($.plumber())
    .pipe($.jade({locals: {
      cssFile: config.styles.path,
      jsFile: config.scripts.path
    }}))
    .pipe(gulp.dest(config.dest));
};

module.exports.watch = glob;
