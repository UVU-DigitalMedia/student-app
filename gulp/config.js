'use strict';

var path = require('path');
var pkg  = require('../package');

var config = {
  dest: 'www',
  src: 'src',
  styles: {
    file: 'app-' + pkg.version + '.min.css',
    dir: 'css'
  },
  scripts: {
    file: 'app-' + pkg.version + '.min.js',
    dir: 'js'
  }
};

config.styles.path  = ['', config.styles.dir, config.styles.file].join('/');
config.scripts.path = ['', config.scripts.dir, config.scripts.file].join('/');

module.exports = config;
