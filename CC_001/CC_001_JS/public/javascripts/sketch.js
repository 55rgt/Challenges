
let stars = [];
let speed;
const numOfStars = 800;
const maxSpeed = 50;



function setup() {
    createCanvas(screen.width, screen.height);
    // Generate Star
    for(let i = 0; i < numOfStars ; i++) {
        stars[i] = new Star();
    }
}
function draw() {
    speed = map(mouseX, 0, width, 0, maxSpeed);
    background(0);
    translate(width / 2, height / 2);
    // Update and Render
    for(let i = 0; i < numOfStars ; i++) {
        stars[i].update();
        stars[i].render();
    }
}
