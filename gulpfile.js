const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('minify-css', () => {
  return gulp.src('./style.css')
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(cleanCSS({compatibility: 'ie8'}))
//   .pipe(autoprefixer({
//     cascade: false
// }))
// .pipe(sourcemaps.init())
// 		.pipe(autoprefixer())
  .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'));
});

gulp.task('styles', function(){
    return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'))
    // .pipe(sourcemaps.init())
	// 	.pipe(autoprefixer())
    .pipe(browserSync.stream());
});


gulp.task('watch', function(){
    browserSync.init({
        server: "./"
    });


    gulp.watch('./scss/**/*', gulp.series(['styles', 'minify-css']));
    gulp.watch(["./*.html", "./*.js"]).on('change', browserSync.reload);
});