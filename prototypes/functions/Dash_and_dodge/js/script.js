/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// First state shown when the prototype runs
let state = "firstFrame"

const gravity = 0.5;

// user 
const user = {
    fill: ('black'),
    x: 30,
    y: 200,
    size: 50,
    velocity: {
        x: 2,
        y: 0,
    },
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    // creates the canvas
    createCanvas(500, 300);

}


/**
 * Depending on the current state, run the function to handle the state
*/
function draw() {
    // Check the state and call the appropriate function
    if (state === "firstFrame") {
        firstFrame();
    }

    // ground 
    drawGround();

    // user 
    drawUser();

}

// ground
function drawGround() {
    push();
    fill("#93370d");
    noStroke();
    rect(0, 225, width, 75);
    pop();
}

// user 
function drawUser() {
    push();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}


/**
 * The first state - "firstFrame"
 */
function firstFrame() {
    background("#b29898"); // red-gray 




}

