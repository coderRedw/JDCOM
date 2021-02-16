/*
 * @Author: your name
 * @Date: 2021-02-16 08:39:49
 * @LastEditTime: 2021-02-16 10:08:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JDCOM\src\gulpfile.js
 */
(function () {
  const gulp = require('gulp')
  const sass = require('gulp-sass')
  const babel = require('gulp-babel')
  const webserver = require('gulp-webserver')

  // create sass
  const sassHandler = function () {
    return gulp
        .src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('../dist/css'))
  }
  // create js
  const jsHandler = function () {
    return gulp
        .src('./js/*.js')
        .pipe(babel({
          presets: ['@babel/env']
        }))
        .pipe(gulp.dest('../dist/js'))
  }
  // create js2
  const utilsHandler = function () {
    return gulp
        .src('./utils/*.js')
        .pipe(babel({
          presets: ['@babel/env']
        }))
        .pipe(gulp.dest('../dist/utils'))
  }
  // create html
  const htmlHandler = function () {
    return gulp
        .src('./views/*.html')
        .pipe(gulp.dest('../dist/views'))
  }
  // create index.html
  const indexHtmlHandler = function () {
    return gulp
        .src('./index.html')
        .pipe(gulp.dest('../dist'))
  }
  // create webserver
  const webserverHandler = function () {
    return gulp
        .src('../dist')
        .pipe(webserver({
          host: 'coderRedw.com',
          port: '8080',
          livereload: true,
          open: './index.html'
        }))
  }
  // create watch
  const watchHandler = function () {
    gulp.watch('./src/sass/*.scss', sassHandler)
    gulp.watch('./src/js/*.js', jsHandler)
    gulp.watch('./src/views/*.html', htmlHandler)
    gulp.watch('./index.html', indexHtmlHandler)
    gulp.watch('./utils/*.js', utilsHandler)
}
  // create default
  module.exports.default = gulp.parallel(sassHandler, jsHandler, utilsHandler,htmlHandler, indexHtmlHandler, webserverHandler, watchHandler)


  module.exports.sassHandler = sassHandler
  module.exports.jsHandler = jsHandler
  module.exports.htmlHandler = htmlHandler
  module.exports.indexHtmlHandler = indexHtmlHandler
  module.exports.webserverHandler = webserverHandler
  module.exports.watchHandler = watchHandler
  module.exports.utilsHandler = utilsHandler
})()