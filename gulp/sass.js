'use strict';

module.exports = function () {
  let processors = [
    $.autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }),
    require('lost'),
    $.mqpacker({
      sort: sortMediaQueries
    }),
    $.csso
  ];

  function isMax (mq) {
    return /max-width/.test(mq);
  }
  function isMin (mq) {
    return /min-width/.test(mq);
  }
  function sortMediaQueries (a, b) {
    let A = a.replace(/\D/g, '');
    let B = b.replace(/\D/g, '');
    if (isMax(a) && isMax(b)) {
      return B - A;
    } else if (isMin(a) && isMin(b)) {
      return A - B;
    } else if (isMax(a) && isMin(b)) {
      return 1;
    } else if (isMin(a) && isMax(b)) {
      return -1;
    }
    return 1;
  }

  $.gulp.task('sass', function () {
    return $.gulp.src($.path.sass + '*.sass')
      .pipe($.plumber({
        errorHandler: $.notify.onError(function (err) {
          return {
            title: 'SASS',
            message: 'this is da way - ' + err.message,
            icon: $.daWay.join(__dirname, 'source/assets/444.png')
          };
        })
      }))
      .pipe($.sass())
      .pipe($.postcss(processors))
      .pipe($.gulp.dest($.path.app + 'css/'))
      .pipe($.gulp.dest($.path.public + 'css/'));
  });
};
