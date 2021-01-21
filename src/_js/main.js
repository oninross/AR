// Main javascript entry point
// Should handle bootstrapping/starting application

"use strict";

import $ from "jquery";

// import MaterialDesign from './common/_material-design';
import ServiceWorker from "../_modules/serviceworker/serviceworker";

let isAframePresent = false;
let isReady = false;
let isPlaying = false;
let triggerPlay = false;
let videoBeacons = "";

if (typeof AFRAME !== "undefined") {
    isAframePresent = true;
    AFRAME.registerComponent("markerhandler", {
        init: function () {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 200, this);
        },
        tick: function (t, dt) {
            if (isReady) {
                if (
                    document.querySelector("#hiroMarker").object3D.visible &&
                    !isPlaying
                ) {
                    console.log("Marker is present");
                    playVideo();
                } else if (
                    !document.querySelector("#hiroMarker").object3D.visible &&
                    isPlaying
                ) {
                    console.log("Marker is not present");
                    stopVideo();
                }
            }
        },
    });
}

$(() => {
    // Simple Service Worker to make App Install work (OPTIONAL)
    // new ServiceWorker();

    if (isAframePresent) {
        videoBeacons = document.getElementById("beacons");

        document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });

        window.addEventListener(
            "touchend",
            function () {
                triggerPlay = true;
            },
            false
        );

        isReady = true;
    }

    console.log("I'm a AR!!!");
});

function playVideo() {
    // if (triggerPlay) {
    isPlaying = true;
    videoBeacons.play();
    // }
}

function stopVideo() {
    isPlaying = false;
    videoBeacons.currentTime = 0;
    videoBeacons.pause();
}
