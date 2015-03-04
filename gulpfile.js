"use strict";

var gulp = require('gulp'),
    browserify = require('browserify'),
    fs = require('fs'),
    babelify = require('babelify'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    stylus = require('gulp-stylus');

gulp.task('babelify', function () {
  browserify({ debug: true })
    .transform(babelify)
    .require("./src/sweetmodal.es6", { entry: true })
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(fs.createWriteStream("./lib/sweetmodal.js"));
});

gulp.task('compressjs', function() {
  gulp.src('lib/sweetmodal.js')
    .pipe(uglify())
    .pipe(rename({
     extname: '.min.js'
    }))
    .pipe(gulp.dest('lib'))
});

gulp.task('styl', function () {
  gulp.src('./src/sweetmodal.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./lib'));
});

gulp.task('watch', function() {
  gulp.watch('./src/sweetmodal.styl', ['styl']);
  gulp.watch('./src/sweetmodal.es6', ['babelify']);
  gulp.watch('./lib/sweetmodal.js', ['compressjs']);
});

gulp.task('default', ['babelify', 'styl', 'compressjs', 'watch']);