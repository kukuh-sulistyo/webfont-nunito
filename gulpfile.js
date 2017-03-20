const gulp = 		require('gulp');
const plumber = 	require('gulp-plumber');
const maps = 		require('gulp-sourcemaps');
const sass = 		require('gulp-sass');
const cleancss = 	require('gulp-clean-css');
const rename =		require('gulp-rename');

gulp.task('sass', () => {
	return gulp.src('sass/*.scss')
		.pipe(plumber())
		.pipe(maps.init())
		.pipe(sass.sync())
		.pipe(maps.write())
		.pipe(gulp.dest('css'));
})

gulp.task('minification', ['sass'], () => {
	return gulp.src('css/webfont-nunito.css')
		.pipe(cleancss())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('css'))
})

gulp.task('default', ['minification']);
