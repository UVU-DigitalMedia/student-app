'use strict';

var gulp = require('gulp-task-master')('gulp/tasks');

gulp.task('default', ['watch']);

gulp.task('build', [
  'scripts',
  'styles',
  'assets',
  'views'
]);

gulp.task('watch', [
  'scripts.watch',
  'styles.watch',
  'assets.watch',
  'views.watch',
  'livereload',
  'server'
]);
