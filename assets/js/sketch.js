var sketch = function(p) {

    var canvas;
    var sketchWidth = window.innerWidth;
    var sketchHeight = window.innerHeight;

    p.setup = function() {
        var canvas = p.createCanvas(sketchWidth, sketchHeight);
        canvas.parent('sketch');
    };

    p.draw = function() {
        p.background(0, 10);
        p.rect(p.random(p.width), p.random(p.height), 10, 10);
    };

};

var myp5 = new p5(sketch);
