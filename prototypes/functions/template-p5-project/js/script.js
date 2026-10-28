/**
 * Don't touch the lines!!!
 * Sofia Allashukurova 
 * 
 * This is a relaxing simulation of a maze. 
 * The rule is simple: never touch the blue lines while you explore it.
 * To move the pink dot, use the arrows of your keyboard.
 */

"use strict";

// first state shown when the prototype runs 
let state = "alive";

// the pink dot that the user controls 
let person = {
    x: 20,
    y: 28,
    size: 10,
}

// the candy that the user is supposed to eat 
let candy;

// coordinates of the new candy that will appear each time the user eats one
// if it was fully randomized, they might appear on the blue lines
const newCandy = [
    { x: 168, y: 27 },
    { x: 368, y: 22 },
    { x: 316, y: 58 },
    { x: 230, y: 69 },
    { x: 305, y: 216 },
    { x: 209, y: 145 },
    { x: 121, y: 146 },
    { x: 30, y: 174 },
];

/**
 * Creates the canvas and makes the candy appear within the corridors of the maze 
*/
function setup() {
    createCanvas(400, 300);

    // the coordinates of the new appearing candy are already defined 
    const appearCandy = random(newCandy);

    // first candy that appears when the game starts in the state alive 
    candy = {
        x: appearCandy.x,
        y: appearCandy.y,
        size: random(5, 25),
    };

}

/**
 * The user navigates the maze with the pink dot. If they touch any of the blue 
 * lines, they respawn at the original coordinates.
*/
function draw() {
    background("#e3e7f5"); // very light blue 
    noStroke();

    // used to get the exact coordinates of the corridors of the maze
    // text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 50, 30);

    drawOutline(); // the four walls of the maze 
    drawInsideBlocks(); // the lines that define the maze 
    drawPerson(); // pink dot the user controls

    // the keys that allow the user to control the pink dot 
    if (keyIsDown(RIGHT_ARROW)) {
        person.x += 3;
    }
    if (keyIsDown(LEFT_ARROW)) {
        person.x -= 3;
    }
    if (keyIsDown(UP_ARROW)) {
        person.y -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        person.y += 3;
    }

    // Check the state and call the appropriate function
    if (state === "alive") {
        alive();
    }
    else if (state === "dead") {
        dead();
    }

    // draws the new appearing candy once the user eats the perivious one 
    if (candyOverlap()) {
        const appearCandy = random(newCandy);
        candy = {
            x: appearCandy.x,
            y: appearCandy.y,
            size: random(5, 25),
        };
    }

    drawCandy();
}

/**
 * The pink dot that the user moves to navigate the maze with the arrows 
 * of their keyboard 
 */
function drawPerson() {
    push();
    fill("#f904cc"); // pink
    ellipse(person.x, person.y, person.size);
    pop();
}

/**
 * The four blue lines that outline the perimeter of the maze 
 */
function drawOutline() {
    push();
    fill("#0909a7"); // blue 
    rect(0, 0, 400, 10); // top
    rect(390, 0, 10, 300); // right
    rect(0, 290, 400, 10); // bottom
    rect(0, 0, 10, 300); // left
    pop();
}

/**
 * The lines that create the walls of the maze 
 */
function drawInsideBlocks() {
    push();
    stroke("#0909a7");
    strokeWeight(10);
    line(10, 50, 250, 50);
    line(300, 40, 400, 40);
    line(250, 50, 250, 90);
    line(300, 40, 300, 80);
    line(300, 120, 300, 150);
    line(300, 120, 400, 120);
    line(60, 90, 250, 90);
    line(60, 90, 60, 120);
    line(0, 160, 60, 160);
    line(100, 130, 100, 190);
    line(100, 130, 145, 130);
    line(145, 130, 145, 250);
    line(60, 160, 60, 250);
    line(60, 250, 145, 250);
    line(190, 130, 190, 300);
    line(190, 130, 230, 130);
    line(230, 130, 230, 250);
    line(345, 170, 345, 200);
    line(290, 200, 345, 200);
    line(290, 200, 290, 300);
    pop();
}

/**
 * The first state "alive".
 * State of the prototype as long as the user does not touch
 * the blue lines with the pink dot.
 */
function alive() {
    if (
        (person.x > 15 && person.x < 253 && person.y > 10 && person.y < 47) || // first corridor - where the user starts and respawns after "dying"
        (person.x > 252 && person.x < 295 && person.y > 10 & person.y < 95) ||

        (person.x > 294 && person.x < 390 && person.y > 10 & person.y < 35) ||
        (person.x > 252 && person.x < 295 && person.y > 94 & person.y < 125) ||

        (person.x > 252 && person.x < 390 && person.y > 87 & person.y < 115) ||
        (person.x > 305 && person.x < 390 && person.y > 45 & person.y < 88) ||

        (person.x > 252 && person.x < 295 && person.y > 114 & person.y < 195) ||
        (person.x > 235 && person.x < 253 && person.y > 96 & person.y < 195) ||

        (person.x > 294 && person.x < 340 && person.y > 155 & person.y < 195) ||
        (person.x > 305 && person.x < 390 && person.y > 126 & person.y < 156) ||

        (person.x > 350 && person.x < 390 && person.y > 154 & person.y < 290) ||
        (person.x > 295 && person.x < 351 && person.y > 205 & person.y < 290) ||

        (person.x > 235 && person.x < 285 && person.y > 194 & person.y < 290) ||
        (person.x > 195 && person.x < 236 && person.y > 255 & person.y < 290) ||

        (person.x > 195 && person.x < 226 && person.y > 135 & person.y < 256) ||
        (person.x > 65 && person.x < 236 && person.y > 95 & person.y < 125) ||

        (person.x > 65 && person.x < 95 && person.y > 124 & person.y < 245) ||
        (person.x > 94 && person.x < 140 && person.y > 195 & person.y < 245) ||

        (person.x > 105 && person.x < 140 && person.y > 135 & person.y < 196) ||
        (person.x > 10 && person.x < 66 && person.y > 125 & person.y < 155) ||
        (person.x > 10 && person.x < 66 && person.y > 55 & person.y < 126) ||

        (person.x > 65 && person.x < 245 && person.y > 55 & person.y < 85) ||
        (person.x > 150 && person.x < 185 && person.y > 124 & person.y < 290) ||
        (person.x > 10 && person.x < 151 && person.y > 255 & person.y < 290) ||

        (person.x > 10 && person.x < 205 && person.y > 165 & person.y < 256)

    )
        state = "alive"; // if the user does not touch the blue lines

    else {
        state = "dead" // if the user touches one of the blue lines
    }

}

/**
 * The second state "dead".
 * State of the prototype if the user touches one of the blue lines
 * User respaws at the original coordinates
 */

function dead() {
    person.x = 20;
    person.y = 28;
    state = "alive";
}

/**
 * Draws the green candy inside of the maze
 */
function drawCandy() {
    push();
    noStroke();
    fill("#407a4d")
    ellipse(candy.x, candy.y, candy.size);
    pop();
}

/**
 * Checks if user (person) overlaps the candy (touches it)
 * If they overlap, a new candy appears 
 */
function candyOverlap() {
    const d = dist(person.x, person.y, candy.x, candy.y);
    if (d < person.size / 2 + candy.size) {
        return true;
    }
    else {
        return false;
    }
}
