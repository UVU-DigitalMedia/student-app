'use strict';

var gulp   = require('gulp');
var path   = require('path');
var config = require('../config');
var $      = require('../plugins');

module.exports = function () {
  return gulp.src(path.join(config.src, 'styles', 'main.styl'))
    .pipe($.plumber())
    .pipe($.stylus({sourcemap: {inline: true}}))
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.concat(config.styles.file))
    .pipe($.pleeease({mqpacker: true}))
    .pipe($.sourcemaps.write('../maps'))
    .pipe(gulp.dest(path.join(config.dest, config.styles.dir)));
};

module.exports.watch = path.join(config.src, 'styles', '**', '*.styl');
