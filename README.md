# AR Firestarter

Generated using [generator-yeogurt@2.0.0](https://github.com/larsonjj/generator-yeogurt)

## Description

It's a collection of [demos](https://oninross.github.io/AR/) that showcases the use of markers and markerless augmented reality. It utilises [A-Frame](https://github.com/aframevr/aframe) and [AR.js](https://github.com/AR-js-org/AR.js/) to display AR on mobile devices.

## Automated tasks

This project uses [Gulp](http://gulpjs.com) to run automated tasks for development and production builds. The tasks are as follows:

`gulp --production`: Same as `gulp serve --production`

`gulp serve`: Compiles preprocessors and boots up development server

`gulp serve --open`: Same as `gulp serve` but will also open up site/app in your default browser

## Folder Structure

`_models`: contains all the models used for markerless and markered AR.

`_patterns`: contains the patterns that will be used for recognising the markers. Use [AR.js Marker Training](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html) for creating markers and images. Set Pattern ratio to 0.60 (its what this demo is set to recognise).
