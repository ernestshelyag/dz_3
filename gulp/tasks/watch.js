'use strict';

module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch($.path.pug + '**/*.pug', $.gulp.series('pug'));
    $.gulp.watch($.path.sass + '**/*.sass', $.gulp.series('sass'));
    $.gulp.watch($.path.source + '**/*.js', $.gulp.series('scripts'));
  });
};
