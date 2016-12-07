"use strict";

var sketchProc = function sketchProc(p) {
  // Create canvas:
  p.size(620, 400);
};

var canvas = document.getElementById("canvas");

var processingInstance = new Processing(canvas, sketchProc);