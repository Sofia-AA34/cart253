/**
 * Type away! Your secrets are safe with me
 * Sofia Allashukurova
 * 
 * It's a special typewriter. A one of a kind journal that will
 * never disclose any of your secrets. How? Type in your thoughts 
 * and press enter to unroll more space!
 */

"use strict";

// The image used in this prototype 
let typingMachineImg; // image of a typewriter

// Paper that unscrolls
let paper = {
    // Position, size and color of the paper - rectangle
    // Position 
    x: 94,
    y: 98,
    // Size
    width: 216,
    height: 174,
    // Color
    fill: ('#FAFAEC') // beige
}

// For the keyPressed function
// User types their own text 
let write = "";

// To create the illusion that the paper really does unfold 
let paperBack = {
    // Position, size and color of the back of the paper - rectangle 
    // Position 
    x: 70,
    y: -180,
    // Size
    height: 60, // the width is the same as of the paper itslef
    // color
    fill: ('#b2b29e') // dark beige
}

/**
 * Creates the canvas and laods the typewriter image
*/
async function setup() {
    // creates the canvas 
    createCanvas(400, 500);

    // loads the typewriter image 
    typingMachineImg = await loadImage("assets/images/typing_machine.png");

    // text settings 
    textSize(16);
    fill('black');

    angleMode(DEGREES);

}


/**
 * User writes anything they want on the paper coming out of 
 * the typwwriter using their keyboard. When there is no more space, 
 * user presses "ENTER" to unfold more paper and can resume
 * typing. 
 */
function draw() {
    background('#D8A8A6'); // light pink

    drawPaperBack(); // creates the illusion that it is the paper back

    image(typingMachineImg, -55, -90, 500, 650); // typewriter image 

    drawPaper();

    drawPaperMoves(); // paper unfolding 


    // used to get the exact coordinates of the cursor
    // text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 50, 50);

    // space where the text appears 
    text(write, paper.x + 10, paper.y + 10, paper.width, paper.height);
}

/**
 * Draws the paper as it unfolds when user presses "ENTER"
 */

function drawPaperMoves() {
    if (keyCode === ENTER) {
        paper.y -= 1;
        paper.height += 1;
        paperBack.height += 1;
    }
}

/**
 * Draws the paper sticking out of the typewriter - recatangle 
 */
function drawPaper() {
    push();
    noStroke();
    fill(paper.fill);
    rect(paper.x, paper.y, paper.width, paper.height);
    pop();
}

/**
 * Function that makes the text appear on the paper when the user types on their keyboard
 */
function keyPressed() {

    // otherwise the words "BACKSPACE", "ENTER" and "SHIFT" 
    // are typed out when their respevive keys are pressed 

    if (keyCode === BACKSPACE) {
        write = write.slice(0, -1);
    }
    else if (keyCode === ENTER) {

    }

    else if (keyCode === SHIFT) {

    }

    else { write += key }

}

/**
 * Draws the back of the paper as if it unfolds 
 */
function drawPaperBack() {
    push()
    noStroke();
    fill(paperBack.fill);
    rotate(5);
    rect(paperBack.x, paperBack.y, paper.width, paperBack.height);
    pop();
}