/**
 * Mr. Furious
 * Sofia Allashukurova
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
};

//bird
let bird = {
    x1: 0,
    y1: 100,
    x2: 15,
    y2: 115,
    x3: 15,
    y3: 115,
    x4: 30,
    y4: 100
};

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

    // Constrain the shade to be within the normal range of colors, 0 - 255
    skyShade.r = constrain(skyShade.r, 0, 255);
    skyShade.g = constrain(skyShade.g, 0, 255);
    skyShade.b = constrain(skyShade.b, 0, 255);

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

    // Make the annoying bird fly across the screen
    // To the right 
    bird.x1 = bird.x1 + 1;
    bird.x2 = bird.x2 + 1;
    bird.x3 = bird.x3 + 1;
    bird.x4 = bird.x4 + 1;

    // Up
    bird.y1 = bird.y1 + 0.1;
    bird.y2 = bird.y2 + 0.1;
    bird.y3 = bird.y3 + 0.1;
    bird.y4 = bird.y4 + 0.1;



    // Draw an annoying bird that flies above Mr. Furious
    push();
    stroke('white');
    strokeWeight(3);
    line(bird.x1, bird.y1, bird.x2, bird.y2);
    line(bird.x3, bird.y3, bird.x4, bird.y4);
    push();

}