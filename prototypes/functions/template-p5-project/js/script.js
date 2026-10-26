/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const fish = {
    x1: 400,
    y1: 600,
    x2: 550,
    y2: 500,
    x3: 550,
    y3: 700,
    velocity: {
        x1: -10,
        y1: -5,
        x2: -10,
        y2: -5,
        x3: -10,
        y3: -5,
    }
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 600);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#1e446c") // dark blue

    // draw the bubbles 
    drawBubble(100, 100, 50);
    drawBubble(150, 200, 25);
    drawBubble(300, 70, 100);
    drawBubble(100, 400, 100);
    drawBubble(200, 500, 50);
    drawBubble(300, 300, 75);

    // draw the fish and make it swim across the screen
    wrapFish(fish);
    swimFish(fish);
    drawFish(fish);

}

function drawBubble(x, y, size) {
    push();
    noStroke();
    fill("#7ea3ca");
    ellipse(x, y, size);
    pop();
}

function drawFish(fish) {
    push();
    noStroke();
    fill("#140320");
    triangle(fish.x1, fish.y1, fish.x2, fish.y2, fish.x3, fish.y3);
    pop();
}

/**
 * Move the fish by its velocity
 */
function swimFish(fish) {
    fish.x1 += fish.velocity.x1;
    fish.x2 += fish.velocity.x2;
    fish.x3 += fish.velocity.x3;

    fish.y1 += fish.velocity.y1;
    fish.y2 += fish.velocity.y2;
    fish.y3 += fish.velocity.y3;
}

/**
 * If the fish goes off the canvas, wrap it around
 */
function wrapFish(fish) {
    // right to left 
    if (fish.x1 < -150 || fish.x2 < -width || fish.x3 < -width) {
        fish.x1 = 500 + fish.x1;
        fish.x2 = 500 + fish.x2;
        fish.x3 = 500 + fish.x3;
    }
}
