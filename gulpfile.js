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
  //bounce
  {original: "bounce ",replacement: "bounce_ "},
  {original: "bounce;",replacement: "bounce_;"},
  //bounceIn
  {original: "bounceIn ",replacement: "bounceIn_ "},
  {original: "bounceIn;",replacement: "bounceIn_;"},
  //bounceOut
  {original: "bounceOut ",replacement: "bounceOut_ "},
  {original: "bounceOut;",replacement: "bounceOut_;"},
  //fadeIn
  {original: "fadeIn ",replacement: "fadeIn_ "},
  {original: "fadeIn;",replacement: "fadeIn_;"},
  //fadeInDown
  {original: "fadeInDown ",replacement: "fadeInDown_ "},
  {original: "fadeInDown;",replacement: "fadeInDown_;"},
  //fadeInLeft
  {original: "fadeInLeft ",replacement: "fadeInLeft_ "},
  {original: "fadeInLeft;",replacement: "fadeInLeft_;"},
  //fadeInRight
  {original: "fadeInRight ",replacement: "fadeInRight_ "},
  {original: "fadeInRight;",replacement: "fadeInRight_;"},
  //fadeInUp
  {original: "fadeInUp ",replacement: "fadeInUp_ "},
  {original: "fadeInUp;",replacement: "fadeInUp_;"},
  //fadeOut
  {original: "fadeOut ",replacement: "fadeOut_ "},
  {original: "fadeOut;",replacement: "fadeOut_;"},
  //fadeOutDown
  {original: "fadeOutDown ",replacement: "fadeOutDown_ "},
  {original: "fadeOutDown;",replacement: "fadeOutDown_;"},
  //fadeOutLeft
  {original: "fadeOutLeft ",replacement: "fadeOutLeft_ "},
  {original: "fadeOutLeft;",replacement: "fadeOutLeft_;"},
  //fadeOutRight
  {original: "fadeOutRight ",replacement: "fadeOutRight_ "},
  {original: "fadeOutRight;",replacement: "fadeOutRight_;"},
  //fadeOutUp
  {original: "fadeOutUp ",replacement: "fadeOutUp_ "},
  {original: "fadeOutUp;",replacement: "fadeOutUp_;"},
  //flip
  {original: "flip ",replacement: "flip_ "},
  {original: "flip;",replacement: "flip_;"},
  //rotateIn
  {original: "rotateIn ",replacement: "rotateIn_ "},
  {original: "rotateIn;",replacement: "rotateIn_;"},
  //rotateOut
  {original: "rotateOut ",replacement: "rotateOut_ "},
  {original: "rotateOut;",replacement: "rotateOut_;"},
  //zoomIn
  {original: "zoomIn ",replacement: "zoomIn_ "},
  {original: "zoomIn;",replacement: "zoomIn_;"},
  //zoomOut
  {original: "zoomOut ",replacement: "zoomOut_ "},
  {original: "zoomOut;",replacement: "zoomOut_;"},
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
  fileContent = replace(fileContent, words);
  return gulp.src('source/polymer-template.html')
    .pipe(njk.compile({css: fileContent}))
    .pipe(rename('polymer.animate.css.html'))
    .pipe(gulp.dest('.'));
});
