'use strict';

module.exports = function () {
  $.gulp.task('scripts', function() {
    return $.gulp.src([
      $.path.source + '**/*.js',
      $.path.source + '**/**/*.js'
    ])
      .pipe($.concat('main.js'))
      .pipe($.gulp.dest($.path.app + 'js/'))
      .pipe($.uglify())
      .pipe($.gulp.dest($.path.public + 'js/'));
  });
};
