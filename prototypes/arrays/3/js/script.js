/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(600, 400);
}

const user = {
    x: 100,
    y: 200,
    size: 60,
    fill: ('orange'),
    velocity: {
        y: 0,
    },
    gravity: 0.5,
    gravitySpeed: 0,
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('lightblue');

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
    user.y += user.velocity.y + user.gravitySpeed;
}