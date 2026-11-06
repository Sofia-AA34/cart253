/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let obstacles = [];

const obstacleDelay = 0.5 * 1000;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(600, 400);


    setTimeout(addObstacle, obstacleDelay);
}

const user = {
    x: 100,
    y: 200,
    size: 50,
    fill: ('orange'),
    velocity: {
        x: 0,
        y: 0,
    },
    gravity: 0.5,
    gravitySpeed: 0,
}

function addObstacle() {
    const obstacle = createObstacle();
    obstacles.push(obstacle);

    setTimeout(addObstacle, obstacleDelay);
}

function createObstacle() {
    const newObstacle = {
        x: 400,
        y: random(0, 360),
        width: random(40, 150),
        height: 40,
        fill: ('green'),
        velocity: {
            x: -5,
        }
    };
    return newObstacle;
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
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

function createUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

function forceGravity() {
    user.gravitySpeed += user.gravity;
    user.x += user.velocity.x;
    user.y += user.velocity.y + user.gravitySpeed;
}

function keyPressed() {
    if (keyCode === 32) {
        user.gravitySpeed = -7;
    }
}

function drawObstacle(obstacle) {
    push();
    noStroke();
    fill(obstacle.fill);
    rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    pop();
}

function moveObstacle(obstacle) {
    obstacle.x += obstacle.velocity.x;
}

function checkTouch(obstacle) {
    if (
        user.x + user.size / 2 > obstacle.x &&
        user.x - user.size / 2 < obstacle.x + obstacle.width &&
        user.y + user.size / 2 > obstacle.y &&
        user.y - user.size / 2 < obstacle.y + obstacle.height) {
        noLoop();
    }
}