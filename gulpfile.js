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

// Gulp
var gulp = require('gulp');

// Gulp plugins
var njk = require('gulp-nunjucks');
var rename = require('gulp-rename');

var words = [
  {
    original: "In ",
    replacement: "InBase "
  },
  {
    original: "Out ",
    replacement: "OutBase "
  },
  {
    original: "In;",
    replacement: "InBase;"
  },
  {
    original: "Out;",
    replacement: "OutBase;"
  }
];

var replace = function(source, words) {
  for (var i = 0; i < words.length; i++) {
    source = source.split(words[i].original).join(words[i].replacement);
  }
  return source;
};

// Build the Polymer file from the source
gulp.task('default', function() {
  var fileContent = fs.readFileSync("./bower_components/animate.css/animate.css", "utf8");
  fileContent = replace(fileContent,words);
  return gulp.src('source/polymer-template.html')
    .pipe(njk.compile({css: fileContent}))
    .pipe(rename('polymer.animate.css.html'))
    .pipe(gulp.dest('.'));
});
