#polymer.animate.css 

##### Original Author: Dan Eden 
##### Adapted by: Andrew Stacy

`polymer.animate.css` is a [Polymer](https://www.polymer-project.org/1.0/) adaptation of the `animate.css` library found [here](https://github.com/daneden/animate.css). It wraps the original library so it can be consumed by Polymer projects.

`Animate.css` is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

## Installation

To install via Bower, simply do the following:

```bash
$ bower install polymer.animate.css --save
```

## Basic Usage
1. Import the styles into your Polymer components:

  ```html
  <link rel="import" href="[bower_components_path]/polymer.animate.css/polymer.animate.css.html">
  ```

2. Add the class `animated` to the element you want to animate.
 You may also want to include the class `infinite` for an infinite loop.

3. Finally you need to add one of the following classes:

  * `bounce_`
  * `flash`
  * `pulse`
  * `rubberBand`
  * `shake`
  * `headShake`
  * `swing`
  * `tada`
  * `wobble`
  * `jello`
  * `bounceIn_`
  * `bounceInDown`
  * `bounceInLeft`
  * `bounceInRight`
  * `bounceInUp`
  * `bounceOut_`
  * `bounceOutDown`
  * `bounceOutLeft`
  * `bounceOutRight`
  * `bounceOutUp`
  * `fadeIn_`
  * `fadeInDown_`
  * `fadeInDownBig`
  * `fadeInLeft_`
  * `fadeInLeftBig`
  * `fadeInRight_`
  * `fadeInRightBig`
  * `fadeInUp_`
  * `fadeInUpBig`
  * `fadeOut_`
  * `fadeOutDown_`
  * `fadeOutDownBig`
  * `fadeOutLeft_`
  * `fadeOutLeftBig`
  * `fadeOutRight_`
  * `fadeOutRightBig`
  * `fadeOutUp_`
  * `fadeOutUpBig`
  * `flipInX`
  * `flipInY`
  * `flipOutX`
  * `flipOutY`
  * `lightSpeedIn`
  * `lightSpeedOut`
  * `rotateIn_`
  * `rotateInDownLeft`
  * `rotateInDownRight`
  * `rotateInUpLeft`
  * `rotateInUpRight`
  * `rotateOut_`
  * `rotateOutDownLeft`
  * `rotateOutDownRight`
  * `rotateOutUpLeft`
  * `rotateOutUpRight`
  * `hinge`
  * `rollIn`
  * `rollOut`
  * `zoomIn_`
  * `zoomInDown`
  * `zoomInLeft`
  * `zoomInRight`
  * `zoomInUp`
  * `zoomOut_`
  * `zoomOutDown`
  * `zoomOutLeft`
  * `zoomOutRight`
  * `zoomOutUp`
  * `slideInDown`
  * `slideInLeft`
  * `slideInRight`
  * `slideInUp`
  * `slideOutDown`
  * `slideOutLeft`
  * `slideOutRight`
  * `slideOutUp`

Full example:
```html
<h1 class="animated infinite bounce">Example</h1>
```

[Check out all the animations here!](https://daneden.github.io/animate.css/)

## Custom Builds
Animate.css is powered by [gulp.js](http://gulpjs.com/), and you can create custom builds pretty easily. First of all, you’ll need Gulp and all other dependencies:

```sh
$ cd path/to/animate.css/
$ sudo npm install
```

Next, run `gulp` to compile your custom builds. For example, if you want only some of the “attention seekers”, simply edit the `animate-config.json` file to select only the animations you want to use.

```javascript
"attention_seekers": {
  "bounce": true,
  "flash": false,
  "pulse": false,
  "shake": true,
  "headShake": true,
  "swing": true,
  "tada": true,
  "wobble": true,
  "jello":true
}
```

## License
Animate.css is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Contributing
Pull requests are the way to go here. I apologise in advance for the slow action on pull requests and issues. I only have two rules for submitting a pull request: match the naming convention (camelCase, categorised [fades, bounces, etc]) and let us see a demo of submitted animations in a [pen](http://codepen.io). That last one is important.
