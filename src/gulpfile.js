var gulp = require('gulp');
var postcss = require('gulp-postcss')
var cssnext = require('postcss-cssnext')
var atImport = require("postcss-import");
var stylefmt = require('stylefmt');

var AUTOPREFIXER_BROWSERS = [
  'last 2 version',
  'ie >= 9',
  'iOS >= 7',
  'Android >= 4.2'
];

var src = {
  'css': ['./css/**/*.css', '!./css/**/_*.css'],
  'cssWatch': './css/**/*.css'
}

var dest = {
  'css': '../dest/css/'
}

gulp.task('css', function() {
  var plugins = [
    atImport,
    cssnext({
      browsers: AUTOPREFIXER_BROWSERS
    }),
    stylefmt
  ];
  return gulp.src(src.css)
  .pipe(postcss(plugins))
  .pipe(gulp.dest(dest.css));
});

gulp.task('watch', ['css'], function() {
  gulp.watch(src.cssWatch, ['css']);
});