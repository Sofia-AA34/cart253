/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// First state shown when the prototype runs
let state = "secondFrame"

const gravity = 0.5;

// user 
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

const ground = {
    x: 0,
    y: 225,
    width: 500,
    height: 75,
}

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
        checkOverlapCactus(cactus1);
        checkOverlapCactus(cactus2);
        checkOverlapCactus(cactusLeft);
        checkOverlapCactus(cactus3);
        checkOverlapCactus(cactus4);
        checkOverlapCactus(cactus5);
    }

    if (state === "secondFrame") {
        secondFrame();
        checkOverlapMeteor(meteor1);
        checkOverlapMeteor(meteor2);
        checkOverlapMeteor(meteor3);
        checkOverlapMeteor(meteor4);
    }

    if (state === "endFrame") {
        endFrame();
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
        user.gravitySpeed = -5;
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
    rect(cactusLeft.x, cactusLeft.y, cactusLeft.width, cactusLeft.height);
    rect(cactus3.x, cactus3.y, cactus3.width, cactus3.height);
    rect(cactus4.x, cactus4.y, cactus4.width, cactus4.height);
    rect(cactus5.x, cactus5.y, cactus5.width, cactus5.height);
    pop();

    if (user.x + user.size / 2 > width) {
        state = "secondFrame";
        user.x = -user.size / 2;
    }
}

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

function secondFrame() {
    background('white');

    // meteors 
    push();
    fill("#100d20");
    ellipse(meteor1.x, meteor1.y, meteor1.size);
    ellipse(meteor2.x, meteor2.y, meteor2.size);
    ellipse(meteor3.x, meteor3.y, meteor3.size);
    ellipse(meteor4.x, meteor4.y, meteor4.size);
    pop();

    meteor1.x += meteor1.velocity.x;
    meteor1.y += meteor1.velocity.y;

    meteor2.x += meteor2.velocity.x;
    meteor2.y += meteor2.velocity.y;

    meteor3.x += meteor3.velocity.x;
    meteor3.y += meteor3.velocity.y;

    meteor4.x += meteor4.velocity.x;
    meteor4.y += meteor4.velocity.y;

    if (user.x + user.size / 2 > width) {
        state = "endFrame";
        user.x = -user.size / 2;
    }
}

function checkOverlapMeteor(meteor) {
    // gets the distance between the meteors' centers and user's center
    const d = dist(user.x, user.y, meteor.x, meteor.y);

    if (d < meteor.size / 2 + user.size / 2) {
        state = "firstFrame";
    }
}

function endFrame() {
    background('pink');
}
