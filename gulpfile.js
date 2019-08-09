"use-strict";

let gulp = require("gulp"),
  mocha = require("gulp-mocha"),
  gutil = require("gulp-util");

gulp.task("mocha", () => {
  return gulp
    .src(["tests/*.js"], { read: false })
    .pipe(mocha({ reporter: "list" }))
    .on("error", gutil.log);
});

gulp.task("mocha-watch", () => {
  gulp.series("mocha");
  gulp.watch(["./**/*.js", "*/test/**/*.js"], gulp.series("mocha"));
});

gulp.task("default", gulp.series("mocha-watch"));
