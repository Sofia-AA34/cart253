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
};

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
};

// Handle of the cup 
let handleCup = {
    // Position, size, angles and color of the handle
    // Position 
    x: 310,
    y: 240,
    // Size 
    width: 80,
    height: 135,
    // Angles 
    startAngle: 240,
    endAngle: 140,
    // Color 
    fill: "#AA336A",
};

// Coffee
let coffee = {
    // Position, size and color of the coffee 
    // Position 
    x: 200,
    y: 153,
    // Size 
    width: 175,
    height: 16,
    // Color
    fill: "#5C4033",
};

// Shadow of the coffee 
let shadow = {
    // Position, size and color of the shadow of the coffee in the cup
    // Position 
    x: 200,
    y: 153,
    // Size
    width: 125,
    height: 10,
    // Color 
    fill: "#351E10"
};

// Steam coming out of the cup



/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 400);

    noStroke();

    angleMode(DEGREES);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#FAD5A5");

    drawHandle();
    drawCup();
    drawCoffee();
    drawSteam();
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

/**
 * Draws the handle of the cup
 */
function drawHandle() {
    push();
    noFill();
    stroke(handleCup.fill);
    strokeWeight(20);
    arc(handleCup.x, handleCup.y, handleCup.width, handleCup.height, handleCup.startAngle, handleCup.endAngle);
    pop();
}

/**
 * Draws the coffee in the cup
 */
// Coffee itslef 
function drawCoffee() {
    push();
    stroke(shadow.fill);
    strokeWeight(3);
    fill(coffee.fill);
    ellipse(coffee.x, coffee.y, coffee.width, coffee.height);
    pop();

    // Shadow of the coffee in the cup
    push();
    fill(shadow.fill);
    ellipse(shadow.x, shadow.y, shadow.width, shadow.height);
    pop();
}

/**
 * Draws the steam coming out of the cup 
 */
function drawSteam() {
}
