/**
 * 1, 2, Void!
 
 * Sofia Allashukurova
 * 
 * It is an animation of the space. 
 * No matter what happens, the world keeps spinnig. Even as small comets fly off into the void.
 */

"use strict";

// Sun
let sun = {
    // Position, size and color 
    // Position 
    x: 80,
    y: 100,
    // Size
    width: 110,
    height: 120,
    // Color 
    fill: "#E8E810"
};

// Planet 1
let planet1 = {
    // Position, size and color
    // Position
    x: 340,
    y: 170,
    // Size
    width: 62,
    height: 55,
    // Color
    fill: "#275207"
};

// Planet 2
let planet2 = {
    // Position, size and color
    // Position 
    x: 210,
    y: 280,
    // Size 
    width: 90,
    height: 100,
    // Color
    fill: "#590827"
};

// Asteroids & comets (objects)
let object = {
    fill: "#201f20",

    // Object 1
    x1: 150,
    y1: 100,
    width1: 45,

    // Object 2
    x2: 130,
    y2: 230,
    width2: 30,

    // Object 3
    x3: 300,
    y3: 20,
    width3: 45,

    // Object 4
    x4: 20,
    y4: 15,
    width4: 15,

    // Object 5
    x5: 380,
    y5: 100,
    width5: 20,
};

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 300);

    noStroke();
}


/**
 * Draws the space 
*/
function draw() {
    background("#6F8FAF");

    drawSun();
    drawPlanet1();
    drawPlanet2();
    drawObject();
}



/**
 * Draws a sun - yellow 
 */
// draws a sun (and makes it rotate)
function drawSun() {
    push();
    fill(sun.fill);
    translate(sun.x, sun.y);
    rotate(frameCount * 0.1);
    ellipse(0, 0, sun.width, sun.height);
    pop();
}

/**
 * Draws planet 1 - green
 */
// draws planet 1 (and makes it rotate)
function drawPlanet1() {
    push();
    fill(planet1.fill);
    translate(planet1.x, planet1.y);
    rotate(frameCount * 0.19);
    ellipse(0, 0, planet1.width, planet1.height);
    pop();
}

/**
 * Draws planet 2 - red
 */
// draws planet 3 (and makes it rotate)
function drawPlanet2() {
    push();
    fill(planet2.fill);
    translate(planet2.x, planet2.y);
    rotate(frameCount * 0.2);
    ellipse(0, 0, planet2.width, planet2.height);
    pop();
}

/**
 * Draws asteroids and comets as ellipses 
 */
function drawObject() {
    // make objects fly away in different directions
    // object 1
    object.y1 = object.y1 + 1.5;      // down
    object.x1 = object.x1 + 2;      // right

    // object 2 
    object.y2 = object.y2 - 0.5;     // up
    object.x2 = object.x2 - 0.7;      // left

    // object 3
    object.y3 = object.y3 + 1.5;        // down
    object.x2 = object.x2 - 0.7;        // left

    // object 4
    object.y4 = object.y4 + 1.5;        // down
    object.x4 = object.x4 + 0.7;        // right

    // object 5 
    object.y5 = object.y5 - 0.5;        // up
    object.x5 = object.x5 - 1.7;        // left

    // draw objects
    push();
    fill(object.fill);
    ellipse(object.x1, object.y1, object.width1);
    ellipse(object.x2, object.y2, object.width2);
    ellipse(object.x3, object.y3, object.width3);
    ellipse(object.x4, object.y4, object.width4);
    ellipse(object.x5, object.y5, object.width5);
    pop();
}