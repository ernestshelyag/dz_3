'use strict';

global.$ = {
  // - plugins -
  del: require('del'),
  pug: require('gulp-pug'),
  gulp: require('gulp'),
  sass: require('gulp-sass'),
  csso: require('postcss-csso'),
  daWay: require('path'),
  notify: require('gulp-notify'),
  gulpIf: require('gulp-if'),
  uglify: require('gulp-uglify'),
  concat: require('gulp-concat'),
  plumber: require('gulp-plumber'),
  postcss: require('gulp-postcss'),
  mqpacker: require('css-mqpacker'),
  imagemin: require('gulp-imagemin'),
  browserSync: require('browser-sync').create(),
  autoprefixer: require('autoprefixer'),
  // - - - - -
  pathTask: {
    tasks: require('./gulp/config.js')
  },
  path: {
    source: 'source/',
    sass: 'source/sass/',
    pug: 'source/pug/',
    app: 'app/',
    public: 'public/'
  }
};

$.pathTask.tasks.forEach(function (e) {
  require(e)();
});

$.gulp.task('default', $.gulp.series(
  'cleanApp',
  'cleanPublic',
  $.gulp.parallel(
    'sass',
    'pug',
    'copyStatics',
    'scripts',
    'fontsToPublic',
    'imgToPublic'
  ),
  $.gulp.parallel(
    'watch',
    'browser-sync'
  )
));
