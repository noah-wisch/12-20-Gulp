/**
 * You MUST have a file cxalled gulpfile.js
 * 
 * The purpose is to describe tasks for converting from dev to production view
 * Read in our files, do x and output to somewhere else
 * 
 * read in all js files => remove all comments => output to public/directory
 */

let gulp = require('gulp'); // 'require' is how we import other JS files into                                this one
let strip = require('gulp-strip-comments');

let sass = require('gulp-sass');

// Organized into tasks 
// Create task 'default' that does whatever function says
// 'Default' is the task that will run by default when you run gulp in terminal
// gulp.task('default', function () {
//     // gulp.src() is how you read files
//     // gulp.dest() is how you write files
// });


gulp.task('default', ['html', 'css', 'js']);

// 4 tasks: default, html, css, js
gulp.task('html', function () {
    gulp.src('gulp.html')
        .pipe(strip())
        .pipe(gulp.dest('public/')); // copy 'gulp.html' into 'public/' directory
});

gulp.task('css', function () {
    gulp.src('gulp.scss')
        .pipe(sass())
        .pipe(strip())
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function () {
    gulp.src('gulp.js')
        .pipe(strip())
        .pipe(gulp.dest('public/'));
});
