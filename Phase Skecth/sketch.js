/*
                                             Dancing Flower
                         
                                              Phase Sketch

I have attempted to create a phase animation using sine and cosine.
My objective for this sketch was to create a visually appealing animation. I researched for patterns and symmetry when I found the mathematical rose, which extensively uses sine and cosine. 

I first draw the flower on the canvas using vertex, it worked well although when adding frequency to animate it did not look as I expected. The vertex did not close its shape and the animation was not symmetrical.
After having some help at the lab I found out that the reason that the vertex was not closing was due the fact that I was creating the radius by multiplying the frequency for the index(TWO_PI) and it would never close as is the frequency that increments a little every time.  
To archive more symmetry, I change the vertex for points and worked out a number of points to create the rose shape.

For colour I wanted to create a pattern that combined with the animation would create a cool effect. I mapped RGB separately and use radius to change between colours creating a flicking effect.
I much prefer a clean look and choose to leave the background black to contrast with the flower.

In general, I am very pleased with my animation although a few things could be improved. I would like for example, the animation to run more smoothly, even if the frequency is low the points still move fast.
*/


// flat radius and frquency to be incremented 
var rd = 0;
var freq = 0;
var numPoints = 60;

function setup() {
    createCanvas(600, 600);
}

function flower() {

    // set the start point to the center
    translate(width / 2, height / 2);

    for (var i = 0; i < TWO_PI * numPoints; i++) {

        // colours variables:
        //map RGB values according to sine values; -1 and 1 and uses radius to change each poin between colours.
        var r = map(sin(rd / 2), -1, 1, 200, 255);
        var g = map(sin(rd / 2), -1, 1, 0, 100);
        var b = map(sin(rd / 2), -1, 1, 200, 0);

        //set the colours
        noFill();
        stroke(r, g, b);
        strokeWeight(3);

        // coordinates variables
        // set radius with current angle and frequency
        rd = 200 * cos(freq * i);
        // calculates x and y position and applies radius to create movement
        var x = rd * cos(i);
        var y = rd * sin(i);

        point(x, y);
    }
}

function draw() {

    background(30);

    flower();

    freq += 0.0001; // frequency increments the radius each frame creating the animation
}
