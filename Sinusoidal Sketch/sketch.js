/*                                             Ocean Waves

                                             Sinusoidal Sketch

I have attempted to create an animation using additive synthesis.

I wanted the animation to look like ocean waves, moving up and down on the canvas, representing the tides. 

For line one function I created two different amplitudes and different values each and combined them with the frequency. After a few experiments with frequency values, I chose to work only with one frequency, with a low value, so the waves run smoothly and were more spaced. 

When incrementing the amplitudes, the waves were getting disproportional, growing to infinity and not resulting in the effect that I wanted. An if statement controlling the max amplitude value solved the problem. I also added the steps first initialized at zero to be increment making the wave start from 0 at x s and cross the canvas. The next step was to create more waves with different amplitudes. The line two function has different amplitudes values that go in a different direction to line one.

And finally, for line three, I have decided to use only one amplitude contrasting with the other waves.

I archived the slow movement I was looking for and I am very pleased with the results.
Further adjustments would make it look better, adding more waves and I would like the background to change colours as well.*/

var freq;
var amp1;
var amp2;
var amp1_2;
var amp2_2;
var phase;
var steps;

function setup() {
    createCanvas(600, 300);

    freq = 0.01;
    amp1 = 30;
    amp2 = 10;
    amp1_2 = 50;
    amp2_2 = 20;
    steps = 0;
}

function lineOne() {

    push();
    translate(0, height / 2);
    beginShape();

    for (var i = 0; i < steps; i++) {
        stroke(255);
        strokeWeight(1);
        noFill();

        var input = i * PI; // makes the numPoints moves halfway throught canvas
        var y = sin(input * freq) * amp1 * sin(amp2); //combine the frequency with 2 amplitudes and input

        vertex(i, y);
    }
    endShape();
    pop();
}

function lineTwo() {

    push();
    translate(0, height / 2);
    beginShape();

    for (var i = 0; i < steps; i++) {

        stroke(255);
        strokeWeight(1);
        noFill();

        var input = i * PI; // makes the numPoints moves halfway throught canvas
        var y = sin(input * freq) * amp1_2 * sin(amp2_2); //combine the frequency with 2 amplitudes and input.

        vertex(i, y);
    }
    endShape();
    pop();
}

function lineThree() {

    push();
    translate(0, height / 2);
    beginShape();

    for (var i = 0; i < steps; i++) {

        stroke(255);
        strokeWeight(1);
        noFill();

        var input = i * PI;

        var y = sin(input * freq) * amp1_2 * 2; // only one amp but double it. Draws the wave from left to right. No up and down movement.

        vertex(i, y);
    }
    endShape();
    pop();
}

function draw() {

    background(9, 60, 190, 2); // low transparency makes the previous wave frames still visible creating a trail effect.

    lineOne();
    lineTwo();
    lineThree();

    // animation for lineOne function
    amp1 += 0.01;
    amp2 += 0.02;
    steps += 1; // increse the steps making the waves appears from left to right for all functions

    // controls the amplitude so the wave doesnt get bigger
    if (amp1 > 0.02) {
        amp1 -= 0.01;
    }

    // animation for lineThree function
    amp1_2 += 0.01;
    amp2_2 += 0.02;

    // controls the amplitude
    if (amp1_2 > 0.02) {
        amp1_2 -= 0.01;
    }
}
