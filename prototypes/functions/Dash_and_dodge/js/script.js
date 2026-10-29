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
        x: 0,
        y: 0,
    },
    gravity: 0.5,
    gravitySpeed: 0,
}

const ground = {
    x: 0,
    y: 225,
    width: 500,
    height: 75,
}

const cactus1 = {
    x: 100,
    y: 200,
    width: 50,
    height: 25,
}

const cactus2 = {
    x: 300,
    y: 175,
    width: 75,
    height: 50,
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

    if (state === "secondFrame") {
        secondFrame();
    }



    forceGravity();
    forceLand();

    // ground 
    drawGround();

    // user 
    drawUser();


    // keys that allow the user to move the black circle
    if (keyIsDown(RIGHT_ARROW)) {
        user.x += 3;
    }
    if (keyIsDown(LEFT_ARROW)) {
        user.x -= 3;
    }

    checkOverlap(cactus1);
    checkOverlap(cactus2);
}


// ground
function drawGround() {
    push();
    fill("#dba16a");
    noStroke();
    rect(ground.x, ground.y, ground.width, ground.height);
    pop();
}

// user 
function drawUser() {
    push();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        user.gravitySpeed = -7;
    }
}

function forceGravity() {
    // gravity
    user.gravitySpeed += user.gravity;
    user.x += user.velocity.x;
    user.y += user.velocity.y + user.gravitySpeed;
}

function forceLand() {
    const land = height - ground.height;
    if (user.y + user.size / 2 > land) {
        user.y = land - user.size / 2;
    }
}

/**
 * The first state - "firstFrame"
 */
function firstFrame() {
    background("#6eceeb"); // red-gray 

    // cactus
    push();
    stroke("#072714");
    strokeWeight(3);
    fill("#50bf0f");
    rect(cactus1.x, cactus1.y, cactus1.width, cactus1.height);
    rect(cactus2.x, cactus2.y, cactus2.width, cactus2.height);
    pop();

    if (user.x + user.size / 2 > width) {
        state = "secondFrame";
    }
}

function checkOverlap(cactus) {
    if (
        user.x + user.size / 2 >= cactus.x &&
        user.x - user.size / 2 <= cactus.x + cactus.width &&
        user.y + user.size / 2 >= cactus.y &&
        user.y - user.size / 2 <= cactus.y + cactus.height
    ) {
        user.x = 30
        user.y = 200;
    }
}

function secondFrame() {
    background('black');
}
