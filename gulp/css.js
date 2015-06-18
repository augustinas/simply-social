var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('css', function () {
  gulp.src('app/css/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('app/assets'));
});

gulp.task('watch:css', function () {
  gulp.watch('app/css/**/*.styl', ['css']);
});