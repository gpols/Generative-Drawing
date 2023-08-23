/*                                            The Running Blocks

                                                 Random Sketch
                                                 
I have attempted to create an animation using randomness.

I started this sketch not having a decisive idea of what I would like to accomplish and open mind to try differents shapes.
After making several sketches with different geographic forms, rectangles were the ones I like the most. I begin by applying random to sizes, stroke and colours.  The result resembled a block of building with loads of little windows which looked cool but I thought it needs it some animation to make it interesting. 

The random function gave me a lot more options to try different forms and made the most of it while keeping the nice building structure that I have done with the static version.

For the animation, working only with amplitude resulted in a nice movement, as if the rectangles are running in the opposite direction to each other.

The colours are analogous, containing two primary colours(green and blue) and a complementary colour(violet) that combined with random values of transparency create a nice composition. The modulo alterates the colour between each other making it less organized, witch i really like it.

This is by far the most enjoyable sketch I have worked on and the one that I have spent the most time trying to make beautiful. Even though it is simple I am very pleased with the results and would only work more on the animation. Not by adding more but by trying to control or reverse the amplitude. */

var amplitude;
var rows;
var columns;

function setup() {
    createCanvas(400, 400);

    rows = 20;
    columns = 20;
    amplitude = 0;
}

function rectangles() {

    randomSeed(2);// contain random to a static image

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            
            var ranColour = random(0, 255);// variable for random colours
            var ranTransp = random(0, 100);// variable for transparency
            var ranSize = randomGaussian(10, 30); // random size 

            // calculates if the index(rows)is odd or even and fill with colour
            if (i % 2 === 0) {

                // even number for i.
                fill(0, 0, ranColour, ranTransp);
            } else {

                // odd number for i.
                fill(0, ranColour, 0, ranTransp);
            }
            stroke(0);
            strokeWeight(random(1, 2));

            input = random(1, 50); // gives irregular intervals to amplitude
            var x = i * rows + sin(input) * amplitude; // add amplitude to rows. Making it move only on the horizontal of the canvas
            var y = j * columns;

            rect(x, y, ranSize, ranSize);
        }
    }
}

function draw() {
    background(190, 160, 250); // violet colour

    rectangles();

    amplitude += 0.2; // increment the amplitude making the blocks to move across the canvas
}
