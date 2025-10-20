// Define FloatingCircle class
class FloatingCircle {
  constructor(element, speedX, speedY, radius) {
    this.element = element;
    this.speedX = speedX;
    this.speedY = speedY;
    this.posX = Math.random() * window.innerWidth;
    this.posY = Math.random() * window.innerHeight;
    this.radius = radius;
    this.blur = Math.random() * 50;  // Generate a random blur value between 0 and 10

    // Set the size of the element
    this.element.style.width = 2 * this.radius + 'px';
    this.element.style.height = 2 * this.radius + 'px';
    this.element.style.filter = `blur(${this.blur}px)`;  // Set the blur
  }

  // Update circle position
  update() {
    // Adding a very small force pulling the circle towards the center
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    this.speedX += (centerX - this.posX) * 0.00001;  // Adjust the coefficient for stronger/weaker gravity
    this.speedY += (centerY - this.posY) * 0.00001;

    // Update position based on speed
    this.posX += this.speedX;
    this.posY += this.speedY;

    // Reverse direction when hitting the edge of the screen
    if (this.posX > window.innerWidth - this.radius || this.posX < this.radius) {
      this.speedX = -this.speedX;
    }
    if (this.posY > window.innerHeight - this.radius || this.posY < this.radius) {
      this.speedY = -this.speedY;
    }

    // Update circle element position
    this.element.style.left = this.posX - this.radius + 'px';
    this.element.style.top = this.posY - this.radius + 'px';
  }

  // Check for collision with another circle
  checkCollision(otherCircle) {
    const dx = this.posX - otherCircle.posX;
    const dy = this.posY - otherCircle.posY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < this.radius + otherCircle.radius) {
      this.speedX = -this.speedX;
      this.speedY = -this.speedY;
      otherCircle.speedX = -otherCircle.speedX;
      otherCircle.speedY = -otherCircle.speedY;
    }
  }
}

// Initialize circles
const circleElements = document.querySelectorAll('.floating-circle');
const circles = [];

for (const circleElement of circleElements) {
  const speedX = Math.random() * 2 - 1; // Speed between -0.5 and 0.5
  const speedY = Math.random() * 2 - 1; // Speed between -0.5 and 0.5
  const radius = Math.random() * 80 + 35;  // Radius between 10 and 50
  const circle = new FloatingCircle(circleElement, speedX, speedY, radius);
  circles.push(circle);
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Update each circle and check for collisions
  for (const circle of circles) {
    circle.update();
    for (const otherCircle of circles) {
      if (circle !== otherCircle) {
        circle.checkCollision(otherCircle);
      }
    }
  }
}

// Start animation
animate();

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const workElement = document.querySelector('.header-work');
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= 200) {
        workElement.textContent = 'Work';
    } else {
        workElement.textContent = 'Contact';
    }

    if (scrollPosition + windowHeight >= documentHeight - 5) {
        workElement.textContent = 'CV';
    }
});