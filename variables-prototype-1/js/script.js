/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Candlestick
// Base of the candlestick
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

// Body of the candlestick
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

// Top of the candlestick
let topRectangle = {
    // Position, size and color of the top rectangle of the candlestick
    x: 120,
    y: 180,
    width: 60,
    height: 30,
    detail: 30,
    // Color 
    fill: (54, 69, 79),
};

let topTriangle1 = {
    // Position and size of the top left triangle of the candlestick 
    // Triangle 1
    x1: 105,
    y1: 195,
    x2: 130,
    y2: 210,
    x3: 130,
    y3: 180,
};

let topTriangle2 = {
    // Position and size of the top right triangle of the candlestick
    // Triangle 2
    x1: 170,
    y1: 210,
    x2: 170,
    y2: 180,
    x3: 195,
    y3: 195,
};

// Candle

// Candle itself (body)
let candle = {
    // Position, size and color of the candle 
    // Position 
    x: 130,
    y: 70,
    // Size
    width: 40,
    height: 110,
    // Color 
    fill: (240, 240, 216),
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
    drawCandle();
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
    fill(topRectangle.fill);
    rect(topRectangle.x, topRectangle.y, topRectangle.width, topRectangle.height, topRectangle.detail);
    triangle(topTriangle1.x1, topTriangle1.y1, topTriangle1.x2, topTriangle1.y2, topTriangle1.x3, topTriangle1.y3);
    triangle(topTriangle2.x1, topTriangle2.y1, topTriangle2.x2, topTriangle2.y2, topTriangle2.x3, topTriangle2.y3);
    pop();
}

/**
 * draws the candle  
 */
function drawCandle() {
    // draws the body of the candle 
    push();
    fill(candle.fill);
    rect(candle.x, candle.y, candle.width, candle.height);
    pop();
}


