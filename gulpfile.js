var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var reactify = require('reactify');
var babelify = require('babelify');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

gulp.task('default', ['copy', 'styles', 'scripts', 'watch', 'browser-sync']);
gulp.task('production', ['copy', 'styles', 'scripts']);

gulp.task('scripts', function () {
    return browserify(['./src/js/main.js'])
        .transform([reactify])
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dist/js/'));

    //var bundler = watchify(
    //    browserify(['./src/js/main.js'])
    //    .transform(reactify));

    //var bundler = watchify(
    //    browserify('./src/js/main.js',
    //        {
    //            debug: true,
    //            transform: [reactify]
    //        }));
    //
    //bundler
    //    .bundle()
    //    .pipe(source('main.js'))
    //    .pipe(gulp.dest('./dist/js/'));

});

gulp.task('styles', function () {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('copy', function () {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.html', ['copy']).on('change', browserSync.reload);
    gulp.watch('./src/sass/**/*.scss', ['styles']).on('change', browserSync.reload);
    gulp.watch(['./src/js/**/*.js*'], ['scripts']).on('change', browserSync.reload);
});

gulp.task('browser-sync', function () {
    // Serve file from the root of this project
    browserSync.init({
        server: {
            baseDir: './dist',
            browser: ['google chrome', 'firefox'],
            notify: true
        }
    });
});

gulp.task('nodemon', function (next) {
    var started = false;

    return nodemon({script: 'x'})
        .on('start', function () {
            if (!started) {
                next();
                started = true;
            }
        });
});