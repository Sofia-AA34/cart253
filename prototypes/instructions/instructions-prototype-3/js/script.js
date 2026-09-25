/**
 * Little Virus
 * Sofia Allashukurova 
 * This is a depiction of a litte fugly chracter named "Little Virus". 
 * He just stares and smiles at you while simultaniously spreading his jerms. 
 * To avoid them, move your mouse around until they turn white. 
 */

"use strict";

let value = 0;

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 400);
}


/**
draws the fugly character 
*/
function draw() {
    //orange background 
    background(255, 153, 0);

    noStroke();

    drawCircles();
    drawCharacter();

}

/**
 * Draws the character using functions
 */
function drawCharacter() {
    drawShape();
    drawEyes();
    drawMouth();
}

/**
 * Draws the shape of the character 
 */

//draw the initial shape (circle)
function drawShape() {
    push();
    fill('white');
    circle(200, 200, 200);
    pop();

    //mold the circle into a better shape for the character
    //rotate the shapes by 1/8 turn

    push();
    translate(275, 125);
    rotate(QUARTER_PI);
    fill('white');
    ellipse(0, 0, 170, 80);
    pop();

    push();
    translate(125, 125);
    rotate(QUARTER_PI);
    fill('white');
    ellipse(0, 0, 80, 170);
    pop();

    push();
    translate(275, 275);
    rotate(QUARTER_PI);
    fill('white');
    ellipse(0, 0, 80, 170)
    pop();

    push();
    translate(125, 275);
    rotate(QUARTER_PI);
    fill('white');
    ellipse(0, 0, 170, 80);
    pop();
}

/***
 * Draw the eyes of the character
 */
function drawEyes() {
    //draw the white of the eyes 
    push();
    stroke('red');
    strokeWeight(5);
    fill('white');
    ellipse(150, 145, 50, 100);
    ellipse(250, 155, 50, 100);
    pop();

    //draw the pupils of the eyes 
    push();
    fill('black');
    ellipse(150, 145, 25, 50);
    ellipse(250, 155, 25, 50);
    pop();

    //draw the light in the eyes 
    push();
    fill('white');
    ellipse(150, 145, 5, 10);
    ellipse(250, 155, 5, 10);
    pop();
}

/**
 * Draw the mouth of the character 
 */
function drawMouth() {
    //makes the character smile / nos smile 
    push();
    let mouthbiteSize = PI / 16;
    let startAngle = PI / 2 * mouthbiteSize * sin(frameCount * 0.1) + mouthbiteSize;
    let endAngle = PI - startAngle;
    pop();

    //draw the shape of the mouth
    push();
    stroke('black');
    strokeWeight(3);
    fill(255, 179, 179);
    arc(200, 230, 110, 30, startAngle, endAngle, PIE);
    pop();
}

/**
 * Draw circles behind the character  
 */
function drawCircles() {
    //draw the circles
    push();
    fill(value);
    circle(50, 50, 50);
    circle(60, 300, 20);
    circle(325, 75, 30);
    circle(250, 360, 60);
    circle(150, 60, 25);
    circle(300, 15, 15);
    circle(365, 305, 35);
    pop();

    //make the circles become lighter as the mouse is moved
}

function mouseMoved() {
    value += 5;
    if (value > 255) {
        value = 0;
    }
}
