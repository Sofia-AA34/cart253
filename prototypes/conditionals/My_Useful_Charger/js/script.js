/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let outletImg;

let state = "nothing";

let battery = {
    fill: "red",
    fills: {
        nothing: "red",
        charge: "green"
    }
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


    if (state === "nothing") {
        nothing();
    }
    else if (state === "charge") {
        nothing();
    }

}
function nothing() {
    // drawChargerBlock
    push();
    fill("white");
    rect(mouseX, mouseY, 140, 130, 20);
    rect(mouseX + 32, mouseY + 25, 75, 75, 20);
    pop();

    // drawChargerCable 
    push();
    noFill();
    stroke("black");
    strokeWeight(25);
    bezier(mouseX + 70, mouseY + 60, mouseX + 250, mouseY - 100, mouseX - 50, mouseY - 100, 450, 400);
    pop();

    // draw battery 
    push();
    fill(battery.fills[state]);
    rect(450, 100, 100, 200);
    pop();

    push();
    stroke("black");
    strokeWeight(2);
    line(451, 150, 549, 150);
    line(451, 200, 549, 200);
    line(451, 250, 549, 250);
    pop();
}

function charge() {
    if (battery.fill === baterry.fills.charge) {
    }
}


function mouseMoved() {
    if (
        (mouseX > 75 && mouseX < 100 && mouseY > 75 && mouseY < 100) ||
        (mouseX > 75 && mouseX < 100 && mouseY > 175 && mouseY < 200)
    ) {
        state = "charge";
    }

    else {
        state = "nothing";
    }

}