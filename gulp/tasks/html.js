import fileInclude from "gulp-file-include"
import webpHtmlNoSvg from "gulp-webp-html-nosvg"

export const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(fileInclude())
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        webpHtmlNoSvg()
      )
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}