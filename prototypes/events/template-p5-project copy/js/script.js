/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let recordPlayerImg;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(600, 400);

    recordPlayerImg = await loadImage("assets/images/record_player.png");

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("black");

    image(recordPlayerImg, 50, 50, 500, 300);

    //drawRecordPlayer();

    noStroke();

}

function drawRecordPlayer() {
    // base 
    push();
    fill('#dad8d5')
    rect(50, 50, 500, 300, 20);
    pop();

    // side pannel 
    push();
    fill('#1c1b1b');
    rect(450, 55, 90, 290);
    pop();

}