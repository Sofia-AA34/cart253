/**
 * Pew Pew Pew 
 * Sofia Allashukurova 
 * 
 * You are an agent of a top secret security organization. Your goal is to shoot the 
 * bad guys, the ones that look like running targets. Be carfeful not to harm the yellow 
 * civilians. Use your mouse to shoot! 
 */

"use strict";

// The targets - red and white ellipses
let targets = [];

// The civilians (harmless guys) - yellow ellipses 
let harmlessGuys = [];

// Time between the targets 
let targetDelay = 0.7 * 1000;

// Time between the civilians
let harmlessGuyDelay = 0.5 * 1000; // so there are more civilians than targets

/**
 * Creates the canvas and adds the targets and civilians according to the the setTimeout
*/
function setup() {
    // creates the canvas 
    createCanvas(600, 400);

    setTimeout(addTarget, targetDelay);
    setTimeout(addHarmlessGuy, harmlessGuyDelay);
}

/**
 * Adds a target to the array
 */
function addTarget() {
    // Create and add a target 
    const target = createTarget();
    targets.push(target);

    // set the new timeout 
    setTimeout(addTarget, targetDelay);
}

/**
 * Creates and returns a randomized target that will start at the top of the canvas and move down 
 */
function createTarget() {
    const target = {
        // Position and dimension
        x: random(50, width - 50), // not too close to the edges of the canavs (right and left) 
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
 * Adds a civilian to the array
 */
function addHarmlessGuy() {
    // create and add a civilian 
    const harmlessGuy = createHarmlessGuy();
    harmlessGuys.push(harmlessGuy);

    // set the new timeout 
    setTimeout(addHarmlessGuy, harmlessGuyDelay);
}

/**
 * Creates and returns a randomized civilian that will start at the top of the canvas and move down 
 */
function createHarmlessGuy() {
    const harmlessGuy = {
        // Position and dimension
        x: random(50, width - 50),
        y: -200, // come a bit later than the targets 
        size: random(30, 70),
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
 * Draw and move the targets and civilians
 * Make them bounce off the edges of the canvas (right and left)
*/
function draw() {
    background("#cddff3");

    // set the cursor to crosshairs: +
    cursor(CROSS);

    for (let harmlessGuy of harmlessGuys) {
        bounceHarmlessGuy(harmlessGuy);
        moveHarmlessGuy(harmlessGuy);
        drawHarmlessGuy(harmlessGuy);
    }

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

    // white ellispe in the middle of the target - makes it look more accurate 
    push();
    noStroke();
    fill('white');
    ellipse(target.x, target.y, target.size / 2);
    pop();
}

/**
 * Moves a target according to its velocity 
 */
function moveTarget(target) {
    target.x += target.velocity.x;
    target.y += target.velocity.y;
}

/**
 * Makes a target bounce off the canvas walls - keeps it from going outside the canvas 
 * left and right
 */
function bounceTarget(target) {
    if (target.x - (target.size / 2) < 0 || target.x + (target.size / 2) > width) {
        target.velocity.x *= -1;
    }
}

/**
 * Draws a civilian according to its properties
 */
function drawHarmlessGuy(harmlessGuy) {
    push();
    noStroke();
    fill(harmlessGuy.fill);
    ellipse(harmlessGuy.x, harmlessGuy.y, harmlessGuy.size);
    pop();
}

/**
 * Moves a civilian according to its velocity 
 */
function moveHarmlessGuy(harmlessGuy) {
    harmlessGuy.x += harmlessGuy.velocity.x;
    harmlessGuy.y += harmlessGuy.velocity.y;
}

/**
 * Makes a civilian bounce off the canvas walls - keeps it from going outside the canvas 
 * left and right
 */
function bounceHarmlessGuy(harmlessGuy) {
    if (harmlessGuy.x - (harmlessGuy.size / 2) < 0 || harmlessGuy.x + (harmlessGuy.size / 2) > width) {
        harmlessGuy.velocity.x *= -1;
    }
}

/**
 * Removes targets if user clicks on them 
 * Stops and turns red the civilians user has clicked on
 */
function mouseClicked() {
    // mouse clicked for the targets 
    for (let target of targets) {
        const d = dist(mouseX, mouseY, target.x, target.y);
        // checks if the user clicks close enough to the target - since it is very fast 
        if (d < target.size * 1.5) {
            // removes the clicked target 
            const index = targets.indexOf(target);
            targets.splice(index, 1);
        }
    }
    // mouse clicked for the civilians 
    for (let harmlessGuy of harmlessGuys) {
        const d = dist(mouseX, mouseY, harmlessGuy.x, harmlessGuy.y);
        const overlap = (d < harmlessGuy.size / 2)
        if (overlap) {
            harmlessGuy.fill = harmlessGuy.fills.dead; // turns red 
            harmlessGuy.velocity.x = harmlessGuy.velocity.x * 0; // stops the movement 
            harmlessGuy.velocity.y = harmlessGuy.velocity.y * 0;
        }
    }
}






