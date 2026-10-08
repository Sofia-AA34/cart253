/**
 * My Useful Charger 
 * Sofia Allashukurova
 * 
 * A simultaion where you plug the charger into the outlet and watch
 * the battery charge right before your eyes
 */

"use strict";

// The image used in this prototype - an outlet 
let outletImg;

// first state shown when the prototype runs 
let state = "empty";

let battery = {
    fill: "red",
    fills: {
        empty: "red",
        full: "green"
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


    if (state === "empty") {
        empty();
    }
    else if (state === "full") {
        empty();
    }

}
function empty() {
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

function full() {
    if (battery.fill === baterry.fills.full) {
    }
}


function mouseMoved() {
    if (
        (mouseX > 75 && mouseX < 100 && mouseY > 75 && mouseY < 100) ||
        (mouseX > 75 && mouseX < 100 && mouseY > 175 && mouseY < 210)
    ) {
        state = "full";
    }

    else {
        state = "empty";
    }

}