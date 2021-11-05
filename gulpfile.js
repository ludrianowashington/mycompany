const {src, series, parallel, watch} = require('gulp');
const browserSync = require("browser-sync").create();

const files = {
  jsPath: './**/*.js', 
  cssPath: './style.css', 
  htmlPath: './index.html'
}

function jsTask() {
  return src(files.jsPath)
}

function cssTask() {
  return src(files.cssPath)
}

function watchTask() {
  browserSync.init({
    server: {
      baseDir: ".",
      index: "index.html",
    },
  });
  watch([files.htmlPath, files.cssPath, files.jsPath]).on("change", browserSync.reload);

  watch([files.cssPath, files.jsPath], parallel(cssTask, jsTask));
}

exports.default = series(watchTask)