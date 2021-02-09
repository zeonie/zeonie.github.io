var gulp         = require('gulp'),
    less         = require('gulp-less'),
    path         = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant');

gulp.task('less', function() {
    return gulp.src('dist/less/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('css'));
});
gulp.task('img', function() {
    return gulp.src('dist/images/**/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('images')); // Выгружаем на продакшен
});
gulp.task('watch', function() {
    gulp.watch('dist/less/**/*.less', gulp.parallel('less'));
});
