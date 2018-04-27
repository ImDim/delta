'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
        open: 'external',

        proxy: $.config.proxy,
        host: $.config.host

    });

    $.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css'], $.browserSync.reload);
  });
};
