"use strict";

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');



gulp.task('lint', function() {
  return gulp.src(['../app/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .on('error', function() {}
  );
});

gulp.task('sass', function() {
  return gulp.src('../sass/*.s*ss')
    // sourcemaps + sass + error handling
    .pipe(sourcemaps.init())
    .pipe(sass({
      sourceComments: true,
      outputStyle: 'compressed'  // nested || compressed
    }))
    .on('error', function () {})
    // generate .maps
    .pipe(sourcemaps.write({
      'includeContent': false,
      'sourceRoot': '.'
    }))
    .pipe(sourcemaps.write({
      'includeContent': true
    }))
    // write sourcemaps to a specific directory
    // give it a file and save
    .pipe(gulp.dest('../css'));
});

gulp.task('watch', function() {
  gulp.watch(['../app/**/*.js', '../sass/**/*.s*ss'], ['lint', 'sass']);

  gutil.log(gutil.colors.bgGreen('Watching for changes...'));
});

gulp.task('default', ['lint', 'sass', 'watch']);
