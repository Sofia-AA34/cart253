/**
 * title
 * Sofia Allashukurova
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Sun
let sun = {
    // Position, size and color 
    // Position 
    x: 100,
    y: 100,
    // Size
    width: 85,
    height: 95,
    // Color 
    fill: "#E8E810"
}

// Planet 1
let planet1 = {
    x: 340,
    y: 170,
    width: 60,
    height: 60,
    fill: "#275207"
}

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


}

/**
 * Draws a sun
 */
function drawSun() {
    push();
    fill(sun.fill);
    ellipse(sun.x, sun.y, sun.width, sun.height);
    pop();
}

/**
 * Draws planet 1
 */
function drawPlanet1() {
    push();
    fill(planet1.fill);
    ellipse(planet1.x, planet1.y, planet1.width, planet1.height);
    pop();
}