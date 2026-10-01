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
let steam1 = {
    // first line of the steam 
    x1: 60,
    y1: 50,
    x2: 100,
    y2: 110,
}

let steam2 = {
    // second line of the steam
    x1: 150,
    y1: 40,
    x2: 160,
    y2: 90,
}

let steam3 = {
    // third line of the steam
    x1: 230,
    y1: 15,
    x2: 220,
    y2: 100,
}

let steam4 = {
    // fourth line of the steam
    x1: 300,
    y1: 70,
    x2: 280,
    y2: 110,
}


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
    stroke('black');
    strokeWeight(3);
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
 * Draws the coffee in the cup (and updates it)
 */
function drawCoffee() {
    // make the coffee disappear from the cup
    push();
    coffee.width = coffee.width - 0.5;
    coffee.height = coffee.height - 0.1;
    shadow.width = shadow.width - 0.5;
    shadow.height = shadow.height - 0.1;
    pop();

    // constrain the coffee to be within normal range 
    push();
    coffee.width = constrain(coffee.width, 0, 400);
    coffee.height = constrain(coffee.height, 0, 400);
    shadow.width = constrain(shadow.width, 0, 400);
    shadow.height = constrain(shadow.height, 0, 400);
    pop();

    // coffee itslef 
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
 * Draws the steam coming out of the cup using lines (and update)
 */
function drawSteam() {
    // make the steam lines go up
    steam1.y1 = steam1.y1 - 0.2;
    steam1.y2 = steam1.y2 - 0.2;
    steam2.y1 = steam2.y1 - 0.5;
    steam2.y2 = steam2.y2 - 0.5;
    steam3.y1 = steam3.y1 - 0.3;
    steam3.y2 = steam3.y2 - 0.3;
    steam4.y1 = steam4.y1 - 0.4;
    steam4.y2 = steam4.y2 - 0.4;

    // draw the steam lines
    push();
    stroke("#59515E");
    strokeWeight(3);
    line(steam1.x1, steam1.y1, steam1.x2, steam1.y2);
    line(steam2.x1, steam2.y1, steam2.x2, steam2.y2);
    line(steam3.x1, steam3.y1, steam3.x2, steam3.y2);
    line(steam4.x1, steam4.y1, steam4.x2, steam4.y2);
    pop();
}
