class Boid {
  constructor () {
    this.position = createVector(width / 2, height / 2) // inicial position to the center of the screen
    this.velocity = p5.Vector.random2D()
    this.velocity.setMag(5)
    this.acceleration = createVector()
    this.maxForce = 0.3
    this.maxSpeed = 10 // general speed
    this.maxSpeedSeparation = 5 // different speed to separation
  }

  //  wrap the boids around the edges of the screen
  edges () {
    if (this.position.x > width) {
      this.position.x = 0
    } else if (this.position.x < 0) {
      this.position.x = width
    }
    if (this.position.y > height) {
      this.position.y = 0
    } else if (this.position.y < 0) {
      this.position.y = height
    }
  }

  // align the boid's velocity with the average velocity of nearby Boids
  align (boids) {
    let perceptionRadius = 1.5 // small radius for a more tightly packed flock
    let steering = createVector()
    let total = 0
    for (let other of boids) {
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      )
      if (other != this && d < perceptionRadius) {
        // If the other Boid is within the perception radius
        steering.add(other.velocity) // add the other boid's velocity to the steering vector
        total++ // add more boids
      }
    }
    if (total > 0) {
      steering.div(total) // divide the steering vector by the count of nearby boids to get the average velocity
      steering.setMag(this.maxSpeed)
      steering.sub(this.velocity)
      steering.limit(this.maxForce) // limit the magnitude
    }
    return steering
  }

  // separate the Boid from nearby Boids to avoid collisions
  separation (boids) {
    let perceptionRadius = 50 // high number to avoid collision
    let steering = createVector()
    let total = 0
    for (let other of boids) {
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      )
      if (other != this && d < perceptionRadius) {
        // If the other Boid is within the perception radius
        let diff = p5.Vector.sub(this.position, other.position) // calculate the difference vector between the Boid and the other Boid
        diff.div(d * d) // divide the difference vector by the squared distance between the Boid and the other Boid
        steering.add(diff) // add the normalized difference vector to the steering vector
        total++
      }
    }
    if (total > 0) {
      steering.div(total)
      steering.setMag(this.maxSpeedSeparation) // higher speed makes the boids more separated form each other
      steering.sub(this.velocity)
      steering.limit(this.maxForce)
    }
    return steering
  }

  cohesion (boids) {
    let perceptionRadius = 400 // higher number so the boids moved to the center
    let steering = createVector()
    let total = 0
    for (let other of boids) {
      // calculate the distance between this boid and each nearby boid
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      )
      if (other != this && d < perceptionRadius) {
        steering.add(other.position)
        total++
      }
    }
    if (total > 0) {
      steering.div(total)
      steering.sub(this.position)
      steering.setMag(this.maxSpeed)
      steering.sub(this.velocity)
      steering.limit(this.maxForce)
    }
    return steering
  }

  flock (boids) {
    // calculate alignment, cohesion, and separation steering vectors
    let alignment = this.align(boids)
    let cohesion = this.cohesion(boids)
    let separation = this.separation(boids)

    // add the alignment, cohesion, and separation steering vectors to the acceleration vector
    this.acceleration.add(alignment)
    this.acceleration.add(cohesion)
    this.acceleration.add(separation)
  }

  update () {
    this.position.add(this.velocity)
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.maxSpeed)
    this.acceleration.mult(0) // reset the acceleration vector
  }

  show () {

    // set colours to blue in the center of the canvas and red in the borders
    // distance between the boid and the center of the canvas
    let distance = dist(this.position.x, this.position.y, width / 2, height / 2)
    //  maximum speed of the boid to a blue color
    let blue = map(this.maxSpeed, 0, this.maxSpeed, 0, 255)
    //distance to the center of the canvas to a red color
    let red = map(distance, 0, dist(0, 0, width / 2, height / 2), 0, 255)

    stroke(red, 0, blue)
    strokeWeight(1)
    point(this.position.x, this.position.y)
  }
}
