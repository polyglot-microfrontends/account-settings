const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del')

function buildJs() {
  return gulp.src([
    'node_modules/angular/angular.js',
    'node_modules/angular-ui-router/release/angular-ui-router.js',
    'node_modules/single-spa-angularjs/lib/single-spa-angularjs.js',
    'src/single-spa-application.js',
    'src/account-settings.module.js',
    'src/**/*.js'
  ])
  .pipe(concat('polyglot-mf-account-settings.js'))
  .pipe(gulp.dest('dist/'));
}

function copyStatic() {
  return gulp.src([
    'src/**/*.html',
    'src/**/*.css',
  ])
  .pipe(gulp.dest('dist/'))
}

function watch() {
  gulp.watch('src/**', gulp.series('build'))
}

function clean(cb) {
  del(['dist']).then(
    () => {
      cb()
    },
    cb
  )
}

gulp.task('clean', clean);
gulp.task('build', gulp.parallel(buildJs, copyStatic));
gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', gulp.series('clean', 'build', watch));