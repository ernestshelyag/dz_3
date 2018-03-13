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
  useref: require('gulp-useref'),
  cssmin: require('gulp-clean-css'),
  uglify: require('gulp-uglify'),
  concat: require('gulp-concat'),
  plumber: require('gulp-plumber'),
  postcss: require('gulp-postcss'),
  mqpacker: require('css-mqpacker'),
  imagemin: require('gulp-imagemin'),
  sourcemaps: require('gulp-sourcemaps'),
  browserSync: require('browser-sync').create(),
  autoprefixer: require('autoprefixer'),
  // - - - - -
  pathTask: {
    tasks: require('./gulp/config/tasks.js')
  },
  path: {
    source: 'front/source/',
    sass: 'front/source/sass/',
    pug: 'front/source/pug/',
    app: 'front/app/',
    appAll: 'front/app/**/*.*',
    public: 'back/public/',
    back: 'back/'
  }
};

$.pathTask.tasks.forEach(function (e) {
  require(e)();
});

$.gulp.task('default', $.gulp.series(
  'cleanApp',
  $.gulp.parallel(
    'sass',
    'pug',
    'copyStaticsToApp',
    'scripts'
  ),
  $.gulp.parallel(
    'watch',
    'browser-sync'
  )
));

$.gulp.task('build', $.gulp.series(
  'cleanPublic',
  $.gulp.parallel(
    'copyPug',
    'css+js',
    'copyFontsToPublic',
    'imgMin'
  ),
  $.gulp.series(
    'cleanHtml'
  )
));
