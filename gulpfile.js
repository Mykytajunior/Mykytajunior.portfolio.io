const gulp = require('gulp'),
   browserSync = require('browser-sync'),
   sass = require('gulp-sass')(require('sass')),
   rename = require('gulp-rename'),
   autoprefixer = require('gulp-autoprefixer'),
   cleanCSS = require('gulp-clean-css'),
   imagemin = require('gulp-imagemin'),
   htmlmin = require('gulp-htmlmin');

// Static server
gulp.task('server', function () {
   browserSync.init({
      server: {
         baseDir: "dist"
      }
   });
   gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('styles', function () {
   return gulp.src("src/sass/*.+(scss|sass)")
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(rename({
         suffix: ".min",
         prefix: "",
      }))
      .pipe(autoprefixer({
         cascade: false
      }))
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest("dist/css"))
      .pipe(browserSync.stream());
});

gulp.task('watch', function () {
   gulp.watch("src/sass/*.+(scss|sass)", gulp.parallel("styles"));
   gulp.watch("src/*.html").on("change", gulp.parallel("html"));
   gulp.watch("src/js/**/*.js").on("change", gulp.parallel("scripts"));
   gulp.watch("src/fonts/**/*").on("all", gulp.parallel("fonts"));
   gulp.watch("src/icons/**/*").on("all", gulp.parallel("icons"));
   gulp.watch("src/img/**/*").on("all", gulp.parallel("images"));
});

// Task gulp plugin to minify HTML
gulp.task('html', function () {
   return gulp.src('src/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist/'));
});

// Task to watch for .js files
gulp.task('scripts', function () {
   return gulp.src('src/js/**/*.js')
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.stream());
});

// Task to a watch for fonts
gulp.task('fonts', function () {
   return gulp.src('src/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'))
      .pipe(browserSync.stream());
});

// Task to Minify PNG, JPEG, GIF and SVG images
gulp.task('images', function () {
   return gulp.src('src/img/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'))
      .pipe(browserSync.stream());
});

// Task to watch for icons
gulp.task('icons', function () {
   return gulp.src('src/icons/**/*')
      .pipe(gulp.dest('dist/icons'))
      .pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'html', 'images'));