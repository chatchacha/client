'use strict';

// get dependencies
var gulp = require('gulp'),
    path = require('path');

// COMPILE CSS
gulp.task('css', function () {
    return gulp
        .src([path.join('src', 'css', 'chatchacha.scss')])
        .pipe(require('gulp-sass')())
        .pipe(gulp.dest(path.join('build', 'css')));
});

// COMPILE JS
gulp.task('js', function () {
    return gulp
        .src(path.join('src', 'js', 'chatchacha.js'))
        .pipe(require('gulp-browserify')({ 'transform': ['babelify'] }))
        .pipe(gulp.dest(path.join('build', 'js')));
});

// COPY STATIC FILES THAT DO NOT NEED COMPILATION
gulp.task('copy', function () {
    gulp
        .src([path.join('src', 'js', '**/*.js'), path.join('!src', 'js', 'chatchacha.js')])
        .pipe(gulp.dest(path.join('build', 'js')));

    gulp
        .src(path.join('node_modules', 'socket.io-client', 'socket.io.js'))
        .pipe(gulp.dest(path.join('build', 'js', 'vendor')));

    gulp
        .src(path.join('src', 'img', '**/*'))
        .pipe(gulp.dest(path.join('build', 'img')));

    gulp
        .src(path.join('src', 'font', '**/*'))
        .pipe(gulp.dest(path.join('build', 'font')));

    return gulp
        .src(path.join('src', 'index.php'))
        .pipe(gulp.dest('build'));
});

// A TASK THAT BUILDS THE WHOLE PROJECT
gulp.task('build', [ 'css', 'js', 'copy' ]);
