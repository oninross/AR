// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import 'lazyload';
import 'TweenLite';
import 'EasePack';
import 'AttrPlugin';
import 'CSSPlugin';
import 'doT';

import './common/_modernizr';


import MaterialDesign from './common/_material-design';

import ServiceWorker from '../_modules/serviceworker/serviceworker';


$(() => {
    // Init Material Design
    const material = new MaterialDesign();
    material.init();


    // Simple Service Worker to make App Install work (OPTIONAL)
    // new ServiceWorker();


    console.log("I'm a firestarter!!!");
});
