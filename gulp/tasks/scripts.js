'use strict';

var gulp   = require('gulp');
var path   = require('path');
var config = require('../config');
var $      = require('../plugins');

var scriptsPath = path.join(config.src, 'scripts', '**', '*.js');

module.exports = function () {
  return gulp.src(scriptsPath)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.concat(config.scripts.file))
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe($.sourcemaps.write('../maps'))
    .pipe(gulp.dest(path.join(config.dest, config.scripts.dir)));
};

module.exports.watch = scriptsPath;
