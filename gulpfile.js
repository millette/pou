'use strict'

const gulp = require('gulp')
const $ = require('gulp-load-plugins')()

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
]

gulp.task('sass', () => {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'))
})

gulp.task('default', ['sass'], () => {
  gulp.watch(['scss/**/*.scss'], ['sass'])
})
