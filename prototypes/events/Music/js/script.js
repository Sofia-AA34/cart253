/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let recordPlayerImg;
let diskImg;

let metalllicPiece1 = {
    x1: 434,
    y1: 145,
    x2: 455,
    y2: 153,
    x3: 395,
    y3: 258,
    x4: 382,
    y4: 243,
}

let metalllicPiece2 = {
    x1: 400,
    y1: 250,
    x2: 380,
    y2: 245,
    x3: 300,
    y3: 278,
    x4: 315,
    y4: 300,
}

let disk = {
    x: 250,
    y: 200,
    width: 320,
    height: 450,
}

let music;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(600, 400);

    //recordPlayerImg = await loadImage("assets/images/record_player.png");
    diskImg = await loadImage("assets/images/vinyl_record.png");
    music = await loadSound("assets/sounds/music.mp3");

    addEventListener("mousemove", playMusic);

    angleMode(DEGREES);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("white");

    //image(recordPlayerImg, 50, 50, 500, 300);



    drawRecordPlayer();

    drawDetails();

    // drawVinylRecord();


    drawDisk();


    drawTonearm();

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


function drawDisk() {
    push();
    imageMode(CENTER);
    translate(disk.x, disk.y);
    rotate(frameCount * 0.7);
    image(diskImg, 0, 0, disk.width, disk.height);
    pop();
}

function drawTonearm() {
    //main two pieces 
    push();
    fill('#8a8a8a');
    quad(482, 55, 510, 65, 490, 110, 447, 95);
    pop();

    push();
    fill('#191919');
    quad(490, 110, 447, 95, 434, 145, 455, 153);
    pop();

    //metal x2
    push();
    fill('#aca8a8');
    quad(metalllicPiece1.x1, metalllicPiece1.y1, metalllicPiece1.x2, metalllicPiece1.y2, metalllicPiece1.x3, metalllicPiece1.y3, metalllicPiece1.x4, metalllicPiece1.y4);
    quad(metalllicPiece2.x1, metalllicPiece2.y1, metalllicPiece2.x2, metalllicPiece2.y2, metalllicPiece2.x3, metalllicPiece2.y3, metalllicPiece2.x4, metalllicPiece2.y4);
    pop();

    push();
    fill('#fefdfd');
    translate(metalllicPiece1.x4, metalllicPiece1.y4,)
    rotate(52);
    rect(0, 0, 40, 5);
    pop();
}

function drawDetails() {
    push();
    fill('#000000');
    rect(100, 305, 70, 20);
    pop();

    push();
    fill('#6d0e0e');
    rect(370, 315, 35, 10);
    pop();

    push();
    fill('#e5cdcd');
    ellipse(472, 310, 40, 35);
    pop();
}

function playMusic() {
    if (!music.isPlaying()) {
        music.play();
    }
}
