'use strict';

module.exports = function () {
  $.gulp.task('browser-sync', function () {
    $.browserSync.init({
      port: 3001,
      server: $.path.app
    });
    $.browserSync.watch($.path.app + '**/*.*').on('change', $.browserSync.reload);
  });
};
