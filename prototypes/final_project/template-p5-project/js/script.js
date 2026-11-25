/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let state = "lavaLevel";

const traveler = {
    fill: ('black'),
    // position
    x: 50,
    y: 700,
    size: 100,
    // movement - does not move at first
    velocity: {
        x: 0,
        y: 0,
    },
    gravity: 0.5,
    gravitySpeed: 0,
}

const wallGround = {
    fill: ("#2d2114"),
    x: 0,
    y: 700,
    width: 1400,
    height: 200,
}

const wallCeilling = {
    fill: ("#000000"),
    x: 0,
    y: 0,
    width: 1400,
    height: 100,
}

const lava1 = {
    fill: ("#d4250b"),
    x: 200,
    y: 700,
    width: 200,
    height: 300,
}

const lava2 = {
    fill: ("#d4250b"),
    x: 600,
    y: 700,
    width: 150,
    height: 100,
}

const lava3 = {
    fill: ("#d4250b"),
    x: 900,
    y: 700,
    width: 80,
    height: 150,
}

const lava4 = {
    fill: ("#d4250b"),
    x: 1200,
    y: 700,
    width: 150,
    height: 120,
}

const block1 = {
    fill: ("#d1fb3b"),
    x: 350,
    y: 500,
    width: 100,
    height: 30,
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1400, 900);

    // turn off the draw loop
    noLoop();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    if (state === "lavaLevel" || state === "deadLavaLevel") {
        background("#937d6e");
        // walls - draw ground and ceiling
        drawWall(wallGround);
        drawWall(wallCeilling);
        // lava 
        createLava(lava1);
        createLava(lava2);
        createLava(lava3);
        createLava(lava4);

        createBlock(block1);
    }

    if (state === "deadLavaLevel") {
        deadLavaLevel();
    }

    forceGravity();
    forceLand();

    createTraveler();

    // move the traveler left and right
    // right
    if (keyIsDown(RIGHT_ARROW)) {
        traveler.x += 3;
    }
    // to the left
    if (keyIsDown(LEFT_ARROW)) {
        traveler.x -= 3;
    }
}

// user 
function createTraveler() {
    push();
    stroke("white");
    strokeWeight(5);
    fill(traveler.fill);
    ellipse(traveler.x, traveler.y, traveler.size);
    pop();

    // constrain the y of the traveler for the ceilling
    if (traveler.y - (traveler.size / 2) < (wallCeilling.y + wallCeilling.height))
        traveler.gravitySpeed *= -1;
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

// resume the draw loop when the user clicks
function mouseClicked() {
    loop();
}

// draws the ground the traveler will land on
function drawWall(wall) {
    push();
    noStroke();
    fill(wall.fill);
    rect(wall.x, wall.y, wall.width, wall.height);
    pop();
}

function forceLand() {
    const land = (height - wallGround.height)
    if (traveler.y + traveler.size / 2 >= land) {
        traveler.y = land - traveler.size / 2;
    }
}

function createLava(lava) {
    push();
    noStroke();
    fill(lava.fill);
    rect(lava.x, lava.y, lava.width, lava.height);
    pop();

    // check if the traveler touches the lava blocks
    if (
        state === "lavaLevel" &&
        traveler.x + traveler.size / 2 >= lava.x && // left side
        traveler.x - traveler.size / 2 <= lava.x + lava.width && // right side
        traveler.y + traveler.size / 2 >= lava.y && // top
        traveler.y - traveler.size / 2 <= lava.y + lava.y + lava.height) { // bottom
        deadLavaLevel();
    }
}

function deadLavaLevel() {
    state = "deadLavaLevel";
    traveler.fill = "#ff2200"; // changes to red
    traveler.x = random(traveler.x - 5, traveler.x + 5); // makes the traveler shake

    setTimeout(function () {
        traveler.x = 50; // original spot
        traveler.y = 700;
        traveler.fill = 'black' // fill turns back to black
        state = "lavaLevel"; // back to the lavaLevel / alive state again
    }, 1500); // ... 1.5s later 
}


function createBlock(block) {
    push();
    noStroke()
    fill(block.fill);
    rect(block.x, block.y, block.width, block.height);
    pop();
}










