/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let state = "alive";

let person = {
    x: 250,
    y: 115
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 300);


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#e3e7f5");
    noStroke();

    // used to get the exact coordinates of the corridors of the maze
    text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 50, 30);

    drawOutline();
    drawInsideBlocks();
    drawPerson();

    if (state === "alive") {
        alive();
    }
    else if (state === "dead") {
        dead();
    }

    if (keyIsDown(RIGHT_ARROW)) {
        person.x += 2;
    }
    if (keyIsDown(LEFT_ARROW)) {
        person.x -= 2;
    }
    if (keyIsDown(UP_ARROW)) {
        person.y -= 2;
    }
    if (keyIsDown(DOWN_ARROW)) {
        person.y += 2;
    }
}

function drawPerson() {
    push();
    fill("#f904cc");
    ellipse(person.x, person.y, 10);
    pop();
}

function drawOutline() {
    push();
    fill("#0909a7");
    rect(0, 0, 400, 10); //top
    rect(390, 0, 10, 300); //right
    rect(0, 290, 400, 10); //bottom
    rect(0, 0, 10, 300); //left
    pop();
}

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

function alive() {
    if (
        (person.x > 10 && person.x < 253 && person.y > 10 && person.y < 47) ||
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

        (person.x > 150 && person.x < 185 && person.y > 124 & person.y < 290)
            (person.x > 10 && person.x < 151 && person.y > 255 & person.y < 290)
            (person.x > 10 && person.x < 205 && person.y > 165 & person.y < 256)

    )
        state = "alive";

    else {
        state = "dead"
    }
}

function dead() {
    person.x = 250;
    person.y = 115;
    state = "alive";
}