'use strict';

module.exports = function () {
  $.gulp.task('copyStaticsToApp', function () {
    return $.gulp.src($.path.source + 'statics/**')
      .pipe($.gulp.dest($.path.app));
  });
  // - - - - -
  $.gulp.task('copyFontsToPublic', function () {
    return $.gulp.src($.path.app + 'fonts/**')
      .pipe($.gulp.dest($.path.public + 'fonts/'));
  });
  // - - - - -
  $.gulp.task('imgMin', function() {
    return $.gulp.src($.path.app + 'img/**')
      .pipe($.imagemin())
      .pipe($.gulp.dest($.path.public + 'img/'));
  });
};
