/**
 * Mr. Furious
 * Sofia ALlashukurova
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    }
};

// Shade to fill the sky (background)
let skyShade = {
    r: 160,
    g: 180,
    b: 200
}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
    // Make day turn to night (make the sky turn from blue to black)
    skyShade.r = skyShade.r - 0.7;
    skyShade.g = skyShade.g - 0.9;
    skyShade.b = skyShade.b - 0.5;
    // Display the sky 
    background(skyShade.r, skyShade.g, skyShade.b);

    // Make Mr. Furious turn red over time 
    mrFurious.fill.g = mrFurious.fill.g - 1;
    mrFurious.fill.b = mrFurious.fill.b - 1;

    // Constrain the fill to be within the normal range of colors, 0 - 255
    mrFurious.fill.g = constrain(mrFurious.fill.g, 0, 255);
    mrFurious.fill.b = constrain(mrFurious.fill.b, 0, 255);

    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();
}