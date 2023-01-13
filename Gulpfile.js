const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function compilaSass(){
    return gulp.src('./src/**.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
}

function images(){
    return gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(compilaSass);

exports.watch = function(){
    gulp.watch('./src/*.scss',{ignoreInitial:false},gulp.series(compilaSass));
}
