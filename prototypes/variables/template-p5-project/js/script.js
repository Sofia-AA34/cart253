/**
 * Steaming cup of coffee
 * Sofia Allashukurova
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict"

// Cup

// Shape of the cup - quad
let shapeCup = {
    // Position and color of the cup
    // Position 
    x1: 100,
    y1: 150,
    x2: 300,
    y2: 150,
    x3: 275,
    y3: 325,
    x4: 125,
    y4: 325,
    // Color 
    fill: "#AA336A",
}

// Mold the quad into the shape of a cup
let ellipseCup = {
    // Ellipse 1 (bottom of the cup)
    // Position and size of the ellipse
    // Position
    x1: 200,
    y1: 325,
    // Size 
    width1: 150,
    height1: 20,

    // Ellipse 2 (top of the cup)
    // Position and size of the ellipse 
    // Position 
    x2: 200,
    y2: 150,
    // Size 
    width2: 200,
    height2: 20,
}


/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 400);

    noStroke();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#FAD5A5");

    drawCup();
}

/**
 * Draws the cup 
 */
function drawCup() {
    push();
    fill(shapeCup.fill);
    quad(shapeCup.x1, shapeCup.y1, shapeCup.x2, shapeCup.y2, shapeCup.x3, shapeCup.y3, shapeCup.x4, shapeCup.y4);
    ellipse(ellipseCup.x1, ellipseCup.y1, ellipseCup.width1, ellipseCup.height1);
    ellipse(ellipseCup.x2, ellipseCup.y2, ellipseCup.width2, ellipseCup.height2);
    pop();
}