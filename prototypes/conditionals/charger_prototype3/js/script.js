/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let outletImg;

let chargerRect1 = {
    // Charger block outer piece 
    // Position and size
    x: 325,
    y: 90,
    width: 125,
    height: 120,
    detail: 30,
}

let chargerRect2 = {
    // Charger block middle piece 
    // Position and size 
    x: 351,
    y: 115,
    width: 75,
    height: 75,
    detail: 35,
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(600, 400);

    outletImg = await loadImage("assets/images/outlet.png");

    noCursor();


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#C9C5B1");

    image(outletImg, 50, 50);

    drawCharger();
}

function drawCharger() {



    push();
    fill("white");
    rect(chargerRect1.x, chargerRect1.y, chargerRect1.width, chargerRect1.height, chargerRect1.detail);
    rect(chargerRect2.x, chargerRect2.y, chargerRect2.width, chargerRect2.height, chargerRect2.detail)
    pop();
}