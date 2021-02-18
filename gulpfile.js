/*
 * @Author: your name
 * @Date: 2021-02-16 08:39:49
 * @LastEditTime: 2021-02-17 11:17:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JDCOM\src\gulpfile.js
 */
(function () {
  const gulp = require('gulp')
  const sass = require('gulp-sass')
  const babel = require('gulp-babel')
  const webserver = require('gulp-webserver')
  const fileInclude = require('gulp-file-include')

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
        .pipe(fileInclude({  
          prefix: '@-@',  
          basepath: './components/' 
        }))
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
  const imgHandler = function () {
    return gulp
        .src('./img/**')
        .pipe(gulp.dest('../dist/img/'))
  }
  
  // create watch
  const watchHandler = function () {
    gulp.watch('./sass/*.scss', sassHandler)
    gulp.watch('./js/*.js', jsHandler)
    gulp.watch('./views/*.html', htmlHandler)
    gulp.watch('./index.html', indexHtmlHandler)
    gulp.watch('./utils/*.js', utilsHandler)
    gulp.watch('./components/**', indexHtmlHandler)
}
  // create default
  module.exports.default = gulp.series(
    gulp.parallel(sassHandler, jsHandler, utilsHandler,htmlHandler, indexHtmlHandler, webserverHandler, imgHandler), watchHandler)


  module.exports.sassHandler = sassHandler
  module.exports.jsHandler = jsHandler
  module.exports.htmlHandler = htmlHandler
  module.exports.indexHtmlHandler = indexHtmlHandler
  module.exports.webserverHandler = webserverHandler
  module.exports.watchHandler = watchHandler
  module.exports.utilsHandler = utilsHandler
  module.exports.imgHandler = imgHandler
})()