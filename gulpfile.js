const gulp = require("gulp");
const concat = require("gulp-concat");
const autoPrefix = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const gulpSass = require("gulp-sass")(require("sass"));

function styles() {
    return gulp.src("app/scss/main.scss")
        .pipe(gulpSass({
            outputStyle: "compressed",
        }).on("error", gulpSass.logError))
        .pipe(autoPrefix({
            overrideBrowserslist: ["last 5 versions"],
        }))
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream())
}

function scripts() {
    return gulp.src([
        "app/js/main.js"
    ])
        .pipe(concat("main.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
}

function watching() {
    gulp.watch(["app/scss/**/*.scss"], styles);
    gulp.watch(["app/js/**/*.js", "!app/js/main.min.js"], scripts);
    gulp.watch(["app/**/*.html"]).on("change", browserSync.reload);
}

function serve() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.serve = serve;

exports.default = gulp.parallel(serve, watching);
