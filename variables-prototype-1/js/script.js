/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Candlestick
let baseEllipse = {
    // Position, size and color of the base - ellipse
    // Position
    x: 150,
    y: 350,
    // Size
    width: 100,
    height: 30,
    // Color
    fill: (54, 69, 79)
};

let baseTriangle = {
    // Position of the base - triangle
    x1: 110,
    y1: 350,
    x2: 190,
    y2: 350,
    x3: 150,
    y3: 305,
};



/**
 * Creates the canvas 
*/
function setup() {
    createCanvas(300, 400);
}


/**
 * Draws the candlestick and candle 
*/
function draw() {
    background(218, 160, 109);

    drawCandlestick();
}

/**
 * Draws the candlestick
 */
function drawCandlestick() {
    // draws the base of the candlestick
    push();
    fill(baseEllipse.fill);
    ellipse(baseEllipse.x, baseEllipse.y, baseEllipse.width, baseEllipse.height);
    triangle(baseTriangle.x1, baseTriangle.y1, baseTriangle.x2, baseTriangle.y2, baseTriangle.x3, baseTriangle.y3);
    pop();


}