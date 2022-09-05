const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const rename = require('gulp-rename')

gulp.task('minScss', () => {
  return gulp
    .src('./themes/index.scss', { allowEmpty: true })
    .pipe(rename('dp-ui.min.css'))
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
    )
    .pipe(gulp.dest('./libs'))
})

gulp.task('scss', () => {
  return gulp
    .src('./themes/index.scss', { allowEmpty: true })
    .pipe(rename('dp-ui.css'))
    .pipe(
      sass({
        outputStyle: 'expanded'
      })
    )
    .pipe(gulp.dest('./libs'))
})

gulp.task('default', gulp.parallel('minScss', 'scss'))
