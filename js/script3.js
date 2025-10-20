class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vx = (Math.random() - 0.5) * 0.5; // Reduced velocity
        this.vy = (Math.random() - 0.5) * 0.5; // Reduced velocity
        this.element = document.createElement("div");
        this.element.className = 'floating-circle';
        document.body.appendChild(this.element);
    }

    updatePosition(width, height) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) {
            this.vx = -this.vx;
        }

        if (this.y < 0 || this.y > height) {
            this.vy = -this.vy;
        }

        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
    }
}

const circles = [];

for (let i = 0; i < 10; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const radius = Math.random() * 50;
    const circle = new Circle(x, y, radius);
    circles.push(circle);
}

function animate() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (const circle of circles) {
        circle.updatePosition(width, height);
    }

    requestAnimationFrame(animate);
}

animate();
