'use strict';

module.exports = function () {
  $.gulp.task('copyStatics', function () {
    return $.gulp.src($.path.source + 'statics/**')
      .pipe($.gulp.dest($.path.app));
  });
  // - - - - -
  $.gulp.task('fontsToPublic', function () {
    return $.gulp.src($.path.source + 'statics/fonts/**')
      .pipe($.gulp.dest($.path.public + 'fonts/'));
  });
  // // - - - - -
  $.gulp.task('imgToPublic', function() {
    return $.gulp.src($.path.source + 'statics/img/**')
      .pipe($.imagemin())
      .pipe($.gulp.dest($.path.public + 'img/'));
  });
};
