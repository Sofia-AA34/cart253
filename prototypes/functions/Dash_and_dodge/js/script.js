/**
 * Dash and Dodge
 * Sofia Allashukurova
 * 
 * Can you reach the end? You must make it past the cactuses 
 * and avoid being hit by the meteors. Use the left and right arrows 
 * of your keyboard to run and the up arrow to jump.
 */

"use strict";

// Text to display for the first, second and end states
let firstString = "The cactuses will sting!";
let secondString = "Runnn!";
let endString = "WOW, YOU WON :)"

// First state shown when the prototype runs
let state = "firstFrame"

// the black circle the user controls with their keyboard
const user = {
    fill: ('black'),
    x: 60,
    y: 200,
    size: 50,
    velocity: {
        x: 0,
        y: 0,
    },
    gravity: 0.5,
    gravitySpeed: 0,
}

// what the user runs on - brown ground 
const ground = {
    x: 0,
    y: 225,
    width: 500,
    height: 75,
}

// cactuses (x6)
const cactus1 = {
    x: 130,
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

const cactusLeft = {
    x: 0,
    y: 0,
    width: 20,
    height: 225,
}

const cactus3 = {
    x: 100,
    y: 0,
    width: 50,
    height: 75,
}

const cactus4 = {
    x: 250,
    y: 0,
    width: 30,
    height: 80,
}

const cactus5 = {
    x: 430,
    y: 0,
    width: 70,
    height: 90,
}

// meteors (x4)
const meteor1 = {
    x: 30,
    y: -100,
    size: 45,
    velocity: {
        x: 3,
        y: 7,
    },
}
const meteor2 = {
    x: 100,
    y: -150,
    size: 50,
    velocity: {
        x: 1,
        y: 2,
    },
}
const meteor3 = {
    x: 200,
    y: -200,
    size: 55,
    velocity: {
        x: -1,
        y: 3,
    },
}
const meteor4 = {
    x: 500,
    y: -150,
    size: 60,
    velocity: {
        x: -3,
        y: 3,
    },
}

/**
 * Creates the canvas and sets up the text
*/
function setup() {
    // creates the canvas
    createCanvas(500, 300);

    // text settings
    textSize(30);
    textAlign(CENTER, CENTER);
}


/**
 * Depending on the current state, runs the function to handle the state
 * Draws the ground and user (black circle) in all the states
*/
function draw() {
    if (state === "firstFrame") {
        firstFrame();

        // checks if the user touches any of the cactuses 
        checkOverlapCactus(cactus1);
        checkOverlapCactus(cactus2);
        checkOverlapCactus(cactusLeft);
        checkOverlapCactus(cactus3);
        checkOverlapCactus(cactus4);
        checkOverlapCactus(cactus5);
    }

    if (state === "secondFrame") {
        secondFrame();

        // checks if the user touches any of the meteors
        checkOverlapMeteor(meteor1);
        checkOverlapMeteor(meteor2);
        checkOverlapMeteor(meteor3);
        checkOverlapMeteor(meteor4);
    }

    if (state === "endFrame") {
        endFrame();
    }

    // When the user jumps, they come back down on the ground 
    // and don't stay floating
    forceGravity();
    forceLand();

    // ground 
    drawGround();

    // user 
    drawUser();

    // keys that allow the user to move the black circle left and right
    if (keyIsDown(RIGHT_ARROW)) {
        user.x += 3;
    }
    if (keyIsDown(LEFT_ARROW)) {
        user.x -= 3;
    }
}

/**
 * Draws the brown ground the user walks on
 */
function drawGround() {
    push();
    fill("#dba16a");
    noStroke();
    rect(ground.x, ground.y, ground.width, ground.height);
    pop();
}

/**
 * Draws the user (black circle)
 */
function drawUser() {
    push();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Key that allows the user to jump 
 */
function keyPressed() {
    if (keyCode === UP_ARROW) {
        user.gravitySpeed = -5;
    }
}

/**
 * Implements the gravity on the user
 */
function forceGravity() {
    user.gravitySpeed += user.gravity;
    user.x += user.velocity.x;
    user.y += user.velocity.y + user.gravitySpeed;
}

/**
 * Makes the user land on the ground and not fall through the canvas 
 */
function forceLand() {
    const land = height - ground.height;
    if (user.y + user.size / 2 > land) {
        user.y = land - user.size / 2;
    }
}

/**
 * The first state - "firstFrame"
 * Draws the blue background, displays the text and draws the cactuses
 * If the user reaches the right end of the canvas, then the "secondFrame" runs
 */
function firstFrame() {
    // draws the background
    background("#6eceeb");

    // text to display 
    push();
    fill("#a41ff7");
    text(firstString, width / 2, height / 3);
    pop();

    // draws the cactuses
    push();
    stroke("#072714");
    strokeWeight(3);
    fill("#50bf0f");
    rect(cactus1.x, cactus1.y, cactus1.width, cactus1.height);
    rect(cactus2.x, cactus2.y, cactus2.width, cactus2.height);
    rect(cactusLeft.x, cactusLeft.y, cactusLeft.width, cactusLeft.height);
    rect(cactus3.x, cactus3.y, cactus3.width, cactus3.height);
    rect(cactus4.x, cactus4.y, cactus4.width, cactus4.height);
    rect(cactus5.x, cactus5.y, cactus5.width, cactus5.height);
    pop();

    // runs the "secondFrame"
    if (user.x + user.size / 2 > width) {
        state = "secondFrame";
        user.x = -user.size / 2;
    }
}

/**
 * Checks if the user touches any of the cactuses 
 * If they do, the user respaws in their original position 
 */
function checkOverlapCactus(cactus) {
    if (
        user.x + user.size / 2 >= cactus.x &&
        user.x - user.size / 2 <= cactus.x + cactus.width &&
        user.y + user.size / 2 >= cactus.y &&
        user.y - user.size / 2 <= cactus.y + cactus.height
    ) {
        user.x = 60;
        user.y = 200;
    }
}

/**
 * The second state - "secondFrame"
 * Draws the blue background, displays the text and draws the falling meteors
 * If the user reaches the right end of the canvas, then the "endFrame" runs
 */
function secondFrame() {
    // draws the background
    background("#b9f4fd");

    // text to display 
    push();
    fill("#f71f1f");
    text(secondString, width / 2, height / 3);
    pop();

    // draws the meteors 
    push();
    fill("#100d20");
    ellipse(meteor1.x, meteor1.y, meteor1.size);
    ellipse(meteor2.x, meteor2.y, meteor2.size);
    ellipse(meteor3.x, meteor3.y, meteor3.size);
    ellipse(meteor4.x, meteor4.y, meteor4.size);
    pop();

    // makes the meteors fall down by their velocity 
    meteor1.x += meteor1.velocity.x;
    meteor1.y += meteor1.velocity.y;

    meteor2.x += meteor2.velocity.x;
    meteor2.y += meteor2.velocity.y;

    meteor3.x += meteor3.velocity.x;
    meteor3.y += meteor3.velocity.y;

    meteor4.x += meteor4.velocity.x;
    meteor4.y += meteor4.velocity.y;

    // runs the endFrame
    if (user.x + user.size / 2 > width) {
        state = "endFrame";
        user.x = -user.size / 2;
    }
}

/**
 * Checks if the user gets hit by any of the meteors  
 * If they do, the user respaws in their original position on the "firstFrame"
 */
function checkOverlapMeteor(meteor) {
    // gets the distance between the meteors' centers and user's center
    const d = dist(user.x, user.y, meteor.x, meteor.y);

    if (d < meteor.size / 2 + user.size / 2) {
        state = "firstFrame";
    }
}

/**
 * The end state - "endFrame"
 * Draws the pink background and displays the text
 * User won
 */
function endFrame() {
    // draws the background
    background('pink');

    // displays the text
    push();
    fill("#4111ee");
    text(endString, width / 2, height / 3);
    pop();
}
