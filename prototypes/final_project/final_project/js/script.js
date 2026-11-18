/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const traveler = {
    fill: ('black'),
    x: 100,
    y: 100,
    size: 100
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1400, 900);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("pink");

    createTraveler();

}

function createTraveler() {
    push();
    stroke("white");
    strokeWeight(5);
    fill(traveler.fill);
    ellipse(traveler.x, traveler.y, traveler.size);
    pop();
}