class Circle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = random(-2, 2);
      this.vy = random(-2, 2);
      this.radius = random(10, 50);
    }
  
    move() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > windowWidth) {
        this.vx = -this.vx;
      }
      if (this.y < 0 || this.y > windowHeight) {
        this.vy = -this.vy;
      }
    }
  
    display() {
      fill(255, 0, 0);
      noStroke();
      ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    }
  }
  