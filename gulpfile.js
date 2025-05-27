const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
  return src('src/styles/index.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  watch('src/styles/**/*.scss', buildStyles)
}

exports.default = series(buildStyles, watchTask)