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
let harmlessGuys = [];

// time between targets
let targetDelay = 0.7 * 1000;
let harmlessGuyDelay = 0.7 * 1000;

/**
 * creates the canvas and the target
*/
function setup() {
    // creates the canvas 
    createCanvas(600, 400);

    setTimeout(addTarget, targetDelay);
    setTimeout(addHarmlessGuy, harmlessGuyDelay);
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

function createHarmlessGuy() {
    // create a target object with appropriate properties
    const harmlessGuy = {
        // Position and dimensions
        x: random(50, width - 50),
        y: -200,
        size: random(40, 50),
        // color
        fill: ('yellow'),
        fills: {
            alive: ('yellow'),
            dead: ('red'),
        },
        // movement
        velocity: {
            x: random(-2, 3),
            y: random(1, 5),
        }
    };
    return harmlessGuy;
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
 * adds a bug to the array
 */
function addHarmlessGuy() {
    const harmlessGuy = createHarmlessGuy();
    harmlessGuys.push(harmlessGuy);

    setTimeout(addHarmlessGuy, harmlessGuyDelay);
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

    for (let harmlessGuy of harmlessGuys) {
        bounceHarmlessGuy(harmlessGuy);
        moveHarmlessGuy(harmlessGuy);
        drawHarmlessGuy(harmlessGuy);
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

    push();
    noStroke();
    fill('white');
    ellipse(target.x, target.y, target.size / 2);
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

/**
 * Draws a target according to its properties
 */
function drawHarmlessGuy(harmlessGuy) {
    push();
    noStroke();
    fill(harmlessGuy.fill);
    ellipse(harmlessGuy.x, harmlessGuy.y, harmlessGuy.size);
    pop();
}

function moveHarmlessGuy(harmlessGuy) {
    harmlessGuy.x += harmlessGuy.velocity.x;
    harmlessGuy.y += harmlessGuy.velocity.y;
}

/**
 * makes the target bounce off the canvas walls - keeps it from going outside the canvas 
 * left and right
 */
function bounceHarmlessGuy(harmlessGuy) {
    if (harmlessGuy.x - (harmlessGuy.size / 2) < 0 || harmlessGuy.x + (harmlessGuy.size / 2) > width) {
        harmlessGuy.velocity.x *= -1;
    }
}

function mouseClicked() {
    for (let target of targets) {
        const d = dist(mouseX, mouseY, target.x, target.y);
        if (d < target.size * 1.5) {
            const index = targets.indexOf(target);
            targets.splice(index, 1);
        }
    }

    for (let harmlessGuy of harmlessGuys) {
        const d = dist(mouseX, mouseY, harmlessGuy.x, harmlessGuy.y);
        const overlap = (d < harmlessGuy.size * 1.5)
        if (overlap) {
            harmlessGuy.fill = harmlessGuy.fills.dead;
            harmlessGuy.velocity.x = harmlessGuy.velocity.x * 0;
            harmlessGuy.velocity.y = harmlessGuy.velocity.y * 0;
        }
    }
}






