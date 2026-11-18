/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const traveler = {
    fill: ('black'),
    x: 100,
    y: 100,
    size: 100,
    // movement - does not move at first
    velocity: {
        x: 0,
        y: 0,
    },
    gravity: 0.5,
    gravitySpeed: 0,
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1400, 900);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("pink");

    forceGravity();
    createTraveler();

}

// user 
function createTraveler() {
    push();
    stroke("white");
    strokeWeight(5);
    fill(traveler.fill);
    ellipse(traveler.x, traveler.y, traveler.size);
    pop();
}

// implements gravity on the traveler (user)
function forceGravity() {
    traveler.gravitySpeed += traveler.gravity;
    traveler.x += traveler.velocity.x;
    traveler.y += traveler.velocity.y + traveler.gravitySpeed;
}

// makes the traveler move with the keyboards arrows
function keyPressed() {
    // arrow up
    if (keyCode === 38) {
        traveler.gravitySpeed = -10;
    }
    // arrow down
    if (keyCode === 40) {
        traveler.gravitySpeed = 5;
    }
}