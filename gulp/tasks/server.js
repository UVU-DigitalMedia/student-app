'use strict';

var gulp   = require('gulp');
var config = require('../config');
var $      = require('../plugins');

module.exports = function (done) {
  var port    = '8000';
  var express = require('express');
  var app     = express();
  var colors  = $.util.colors;
  app.use(express.static(config.dest));
  app.listen(port).on('listening', function () {
    $.util.log(
      '          ' + colors.cyan('Server started on port'), colors.green(port)
    );
    done();
  }).on('error', function (err) {
    done(new $.util.PluginError('server', err));
  });
};
