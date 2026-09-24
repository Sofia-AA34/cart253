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
    noStroke();
    fill('white');
    circle(200, 200, 200);
    pop();

    //mold the circle into a better shape for the character
    //rotate the shapes by 1/8 turn

    push();
    translate(275, 125);
    rotate(QUARTER_PI);
    noStroke();
    fill('white');
    ellipse(0, 0, 170, 80);
    pop();

    push();
    translate(125, 125);
    rotate(QUARTER_PI);
    noStroke();
    fill('white');
    ellipse(0, 0, 80, 170);
    pop();

    push();
    translate(275, 275);
    rotate(QUARTER_PI);
    noStroke();
    fill('white');
    ellipse(0, 0, 80, 170)
    pop();

    push();
    translate(125, 275);
    rotate(QUARTER_PI);
    noStroke();
    fill('white');
    ellipse(0, 0, 170, 80);
    pop();
}

