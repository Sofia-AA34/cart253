/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */
"use strict";

// Will create it with createTarget()
let targets = [];

// time between targets
let targetDelay = 0.7 * 1000;

/**
 * creates the canvas and the target
*/
function setup() {
    // creates the canvas 
    createCanvas(600, 400);

    setTimeout(addTarget, targetDelay);
}

function createTarget() {
    // create a target object with appropriate properties
    const target = {
        // Position and dimensions
        x: random(50, width - 50),
        y: -20,
        size: random(35, 60),
        // color
        fill: ('red'),
        // movement
        velocity: {
            x: random(-4, 5),
            y: random(3, 8),
        }
    };
    return target;
}

/**
 * adds a bug to the array
 */
function addTarget() {
    const target = createTarget();
    targets.push(target);

    // set the new timeout 
    setTimeout(addTarget, targetDelay);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('lightgray');

    // set the cursor to crosshairs: +
    cursor(CROSS);

    // draws and moves the target
    for (let target of targets) {
        bounceTarget(target);
        moveTarget(target);
        drawTarget(target);
    }

}

/**
 * Draws a target according to its properties
 */
function drawTarget(target) {
    push();
    stroke('black');
    strokeWeight(5);
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    pop();
}

function moveTarget(target) {
    target.x += target.velocity.x;
    target.y += target.velocity.y;
}

/**
 * makes the target bounce off the canvas walls - keeps it from going outside the canvas 
 * left and right
 */
function bounceTarget(target) {
    if (target.x - (target.size / 2) < 0 || target.x + (target.size / 2) > width) {
        target.velocity.x *= -1;
    }
}



