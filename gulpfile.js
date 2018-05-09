const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();


gulp.task('copyHtml', function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('imageMin', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

gulp.task('sass', function(){
    gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});


gulp.task('uglify', function(){
    gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['serve']);

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./dist"  
    });

    gulp.watch(['src/sass/**/*.scss'], ['sass']);
    gulp.watch('src/js/*.js', ['uglify']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch("src/*.html",['copyHtml']).on('change', browserSync.reload);
});


