'use strict';

var gulp   = require('gulp');
var path   = require('path');
var config = require('../config');
var $      = require('../plugins');

module.exports = function () {
  var server = $.livereload({silent: true});
  gulp.watch(path.join(config.dest, '**', '*')).on('change', function (file) {
    server.changed(file.path);
  });
};
