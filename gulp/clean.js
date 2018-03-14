'use strict';

module.exports = function () {
  $.gulp.task('cleanApp', function () {
    return $.del($.path.app);
  });
  // - - - - -
  $.gulp.task('cleanPublic', function () {
    return $.del($.path.public);
  });
};
