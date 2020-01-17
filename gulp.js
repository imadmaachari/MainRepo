var gulp = require("gulp"),
  clean = require("gulp-clean");

var filesToMove = [
  "./_locales/**/*.*",
  "./icons/**/*.*",
  "./src/page_action/**/*.*",
  "./manifest.json"
];

gulp.task("clean", function() {
  return gulp.src(["dist/*"], { read: false }).pipe(clean());
});

gulp.task("move", ["clean"], function() {
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(filesToMove, { base: "./" }).pipe(gulp.dest("dist"));
});

gulp.task("dist", ["move"]);
