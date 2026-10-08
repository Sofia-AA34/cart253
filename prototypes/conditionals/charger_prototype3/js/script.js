/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let outletImg;



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

    drawChargerBlock();

}
function drawChargerBlock() {
    push();
    fill("white");
    rect(mouseX, mouseY, 140, 130, 20);
    rect(mouseX + 32, mouseY + 25, 75, 75, 20);
    pop();
}