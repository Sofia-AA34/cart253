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
    x: 80,
    y: 100,
    // Size
    width: 110,
    height: 120,
    // Color 
    fill: "#E8E810"
}

// Planet 1
let planet1 = {
    // Position, size and color
    // Position
    x: 340,
    y: 170,
    // Size
    width: 60,
    height: 60,
    // Color
    fill: "#275207"
}

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
    drawPlanet2();


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

/**
 * Draws planet 2
 */
function drawPlanet2() {
    push();
    fill(planet2.fill);
    ellipse(planet2.x, planet2.y, planet2.width, planet2.height);
    pop();
}