/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

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

    drawCharacter();
}

/**
 * Draws the character using functions
 */
function drawCharacter() {
    drawShape();
    drawEyes();

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