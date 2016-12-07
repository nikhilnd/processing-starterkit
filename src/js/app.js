var sketchProc = function(p) {
  // Create canvas:
  p.size(620, 400);

  p.fill(0, 0, 0);
  p.textSize(36);
  p.text("ProcessingJS Starter Kit", 107, 200);



};

var canvas = document.getElementById("canvas");

var processingInstance = new Processing(canvas, sketchProc);
