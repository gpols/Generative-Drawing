/*

Autonomous Agent

I choose to work with boids code, which took me a while to understand its functionality and make it work essentially.
It was fun to try different values to parameters, there was a lot of change with a simple value. 
I opted for a cleaner visual, with fewer boids, and growing from the centre to the screen, 
that was archived by a higher number of radius perception of cohesion and align function with a very low radius.
For the colour, I choose to map so it would create a cool effect where the centre of the canvas is blue and the borders are pink. 
It was hard to choose the approach to this sketch, I tried many variations but overall I like the growing effect and especially the colours.  
*/


let flock = [];
let totalFrames = 1800; // 30 seconds at 60 fps
let currentFrame = 0;

function setup() {
  createCanvas(640, 360);
  background(0);

  for (let i = 0; i < 10; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  currentFrame++;
  if (currentFrame > totalFrames) {
    currentFrame = 0; // reset the frame counter
    background(0); // clear the canvas
  }
  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }  
}
