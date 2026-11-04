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

/**
 * creates the canvas and the target
*/
function setup() {
    // creates the canvas 
    createCanvas(600, 400);
}

/**
 * Creates a target
 */
function createTarget() {
    // create a target object with appropriate properties
    const target = {
        // Position and dimensions
        x: random(0, width),
        y: -20,
        size: random(25, 50),
        // color
        fill: ('red'),
        // movement
        velocity: {
            x: random(-5, 5),
            y: random(3, 10),
        }
    };
    return target;
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('lightgray');

    // draw the bug 
    for (let target of targets) {
        drawTarget(target);
    }
}

/**
 * Draws a target according to its properties
 */
function drawTarget(target) {
    push();
    fill(target.fill);
    ellispe(target.x, target.y, target.size);
    pop();
}


