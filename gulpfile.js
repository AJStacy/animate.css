////////////////////////////////////////////////////////////////////////////////////////////////
// Polymer.Animate.CSS
// - A Polymer wrapper for Animate.css
//
// Adapted from Animate.css by Dan Eden
//
// Use this Gulpfile to compile the Polymer template from the original Animate.css library.
////////////////////////////////////////////////////////////////////////////////////////////////

// Utilities
var fs = require('fs');
var decamelize = require('decamelize');

// Gulp
var gulp = require('gulp');

// Gulp plugins
var njk = require('gulp-nunjucks');
var rename = require('gulp-rename');

// Build the Polymer file from the source
gulp.task('default', function() {
  var fileContent = decamelize(fs.readFileSync("./bower_components/animate.css/animate.css", "utf8"), '');
  return gulp.src('source/polymer-template.html')
    .pipe(njk.compile({css: fileContent}))
    .pipe(rename('polymer.animate.css.html'))
    .pipe(gulp.dest('.'));
});
