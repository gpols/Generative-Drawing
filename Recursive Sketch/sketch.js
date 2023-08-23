/*

Recursive Sketch 

I started this sketch with the idea of making a texture with rectangles.
The first few sketches looked good but I thought that would look even better with a 3d object and the boxes gave the effect I wanted.
I wanted to keep it random but also within a specific size, so the depth range is low. 
The chosen angles for each recursive are what gave the depth field look in the canvas.  
Red and blue with black canvas again to follow the theme, 
although here I used white and low opacity to the colours so it won't be too much information and therefore hard to distinguish the boxes. 
This was my favourite sketch and I'm very pleased with the result. 
*/


function setup () {
  createCanvas(800, 600, WEBGL)
}

function draw () {
  background(0)
  strokeWeight(0.5)
  noFill()
  rotateY(10)
  translate(width/2, height/2, 0)
  drawBox(width/3, height/3, width/2) 
}

function drawBox (width, height, depth) {

  box(width, height, depth)

 // if depth is greater than 1,  draw smaller boxes
  if (depth > 1) {
  
    push()
    rotate(30) // different angles to each drawing
    translate(-10, 50) // translate the scene to a new position starting from outside canvas
    stroke(255, 80) // white boxes
    drawBox(width * 0.8, height * 0.8, depth * 0.2) // draw a smaller box
    pop()

    push()
    rotate(50)
    translate(-30, 80) // draws from even further from outside the canvas
    stroke(random(50, 100), 0, 0) // red boxes
    drawBox(width * 0.5, height * 0.5, depth * 0.5)// draw a slither bigger box
    pop()

    push()
    rotate(70)
    translate(-50, 110) // draws from even further from outside the canvas
    stroke(0, 30, 46) // blue boxes
    drawBox(width * 0.5, height * 0.5, depth * 0.8)
    pop()
  }
  noLoop()
}
