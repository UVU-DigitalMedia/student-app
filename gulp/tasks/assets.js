'use strict';

var gulp   = require('gulp');
var path   = require('path');
var config = require('../config');
var $      = require('../plugins');

var glob = path.join(config.src, 'assets', '**', '*');

module.exports = function () {
  gulp.src(glob)
    .pipe($.plumber())
    .pipe(gulp.dest(config.dest));
};

module.exports.watch = glob;
