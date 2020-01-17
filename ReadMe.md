- run gulp dist

- example gulp
  gulp.task('copyfonts', function() {
  gulp.src('./bower_components/font-awesome/fonts/\*_/_.{ttf,woff,eof,svg}')
  .pipe(gulp.dest('./fonts'));
  });
