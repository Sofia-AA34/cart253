/**
 * Be Free. Be Bird
 * Sofia Allashukurova
 * 
 * Have you ever wished that you could fly? Test your ability 
 * to avoid obstacles and perhaps your wish will come true. 
 * Press "Space" to make the orange ellipse jump.
 */

"use strict";

// The obstacles - green rectangles 
let obstacles = [];

// Time between the obstacles
let obstacleDelay = 0.5 * 1000;

/**
 * Creates the canvas and adds the obstacles according to the setTimeout 
*/
function setup() {
    // creates the canvas 
    createCanvas(600, 400);

    setTimeout(addObstacle, obstacleDelay);
}

// User properties - orange ellipse user controls with the "space" key
const user = {
    // position and dimension
    x: 100,
    y: 200,
    size: 50,
    // color
    fill: ('orange'),
    // movement
    velocity: {
        x: 0,
        y: 0,
    },
    gravity: 0.5,
    gravitySpeed: 0,
}

/**
 * Adds an obstacle to the array
 */
function addObstacle() {
    // create and add a target
    const obstacle = createObstacle();
    obstacles.push(obstacle);

    // set the new timeout
    setTimeout(addObstacle, obstacleDelay);
}

/**
 * Creates and returns a randomized obstacle that will start on the right side of the 
 * canvas and move to the left
 */
function createObstacle() {
    const newObstacle = {
        // position and dimensions
        x: 600,
        y: random(0, 360),
        width: random(40, 150),
        height: 40,
        // color
        fill: ('green'),
        // movement
        velocity: {
            x: -5,
            y: 0,
        }
    };
    return newObstacle;
}

/**
 * Draws and moves the obstacles. 
 * Displays user, makes it affected by gravity and makes it jump when "space" is pressed
 * If user touches an obstacle, stops the game.
*/
function draw() {
    background('lightblue');

    for (let obstacle of obstacles) {
        checkTouch(obstacle);
        moveObstacle(obstacle);
        drawObstacle(obstacle);
    };

    forceGravity();
    createUser();
}

/**
 * Draws user according to its properties - orange ellipse
 */
function createUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Implements gravity on user 
 */
function forceGravity() {
    user.gravitySpeed += user.gravity;
    user.x += user.velocity.x;
    user.y += user.velocity.y + user.gravitySpeed;
}

/**
 * Makes user jump when "space" is pressed 
 */
function keyPressed() {
    if (keyCode === 32) {
        user.gravitySpeed = -7;
    }
}

/**
 * Draws an obstacle according to its properties
 */
function drawObstacle(obstacle) {
    push();
    noStroke();
    fill(obstacle.fill);
    rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    pop();
}

/**
 * Moves an obstacle according to its velocity
 */
function moveObstacle(obstacle) {
    obstacle.x += obstacle.velocity.x;
}

/**
 * Checks if user touches an obstacle.
 * If so, stops the game.
 */
function checkTouch(obstacle) {
    if (
        user.x + user.size / 2 > obstacle.x && // left side 
        user.x - user.size / 2 < obstacle.x + obstacle.width && // right side
        user.y + user.size / 2 > obstacle.y && // top 
        user.y - user.size / 2 < obstacle.y + obstacle.height) // bottom 
    {
        noLoop(); // stops the game 
    }
}