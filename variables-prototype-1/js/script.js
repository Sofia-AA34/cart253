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
    y: 375,
    // Size
    width: 100,
    height: 30,
    // Color
    fill: (54, 69, 79),
};

let baseTriangle = {
    // Position of the base - triangle
    x1: 110,
    y1: 375,
    x2: 190,
    y2: 375,
    x3: 150,
    y3: 325,
};

let bodyCandlestick = {
    // Position, size and color of the first element
    x: 120,
    y1: 315,
    width: 60,
    height: 35,
    detail: 20,
    // Color
    fill: (54, 69, 79),

    // Position of the second element
    y2: 280,

    // Position of the third element 
    y3: 245,

    // Position of the fourth element
    y4: 210,
};

let topCandlestick = {
    // Position, size and color of the top pasrt of the candlestick - 
}



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

    // draws the body of the candlestick
    push();
    fill(bodyCandlestick.fill);
    rect(bodyCandlestick.x, bodyCandlestick.y1, bodyCandlestick.width, bodyCandlestick.height, bodyCandlestick.detail);
    rect(bodyCandlestick.x, bodyCandlestick.y2, bodyCandlestick.width, bodyCandlestick.height, bodyCandlestick.detail);
    rect(bodyCandlestick.x, bodyCandlestick.y3, bodyCandlestick.width, bodyCandlestick.height, bodyCandlestick.detail);
    rect(bodyCandlestick.x, bodyCandlestick.y4, bodyCandlestick.width, bodyCandlestick.height, bodyCandlestick.detail);
    pop();

    // draws the top part of the candlestick
    push();
    rect(bodyCandlestick.x2, bodyCandlestick.y2, bodyCandlestick.width, bodyCandlestick.height, bodyCandlestick.detail);
    pop();


}

