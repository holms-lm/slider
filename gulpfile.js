'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var terser = require('gulp-terser');

sass.compiler = require('node-sass');

gulp.task('style', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.scss',  gulp.parallel('style'));
    gulp.watch('./src/**/*.js',  gulp.parallel('style'));
});

gulp.task('script', function () {
    return gulp.src('./src/main.js')
        .pipe(terser())
        .pipe(gulp.dest('./dist'));
});