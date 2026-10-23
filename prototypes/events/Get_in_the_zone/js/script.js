/**
 * Get in the zone
 * Sofia Allashukurova
 * 
 * Don't have a record player but always whished for one?
 * Dreams come true today. Click on the record player to begin 
 * the song that will surely help you focus.
 * 
 */

"use strict";

// The image used in this prototype - vinyl record
let diskImg;

// long gray rectangle - quad
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

// gray quad that sits on the vinyl record 
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

// parameters for the vinyl record image 
let disk = {
    // Position and size 
    x: 250,
    y: 200,
    width: 320,
    height: 450,
}

let music;

/**
 * Creates the canvas and loads the vinyl recod image 
 * Loads the song and makes it play when the user clicks on the prototype 
*/
async function setup() {
    createCanvas(600, 400);

    // Loads the image and sound used in this prototype 
    diskImg = await loadImage("assets/images/vinyl_record.png");
    music = await loadSound("assets/sounds/music.mp3");

    // Music starts when the user clicks on the prototype 
    document.addEventListener("click", playMusic);

    angleMode(DEGREES);
}


/**
 * Draws the record player and the vinyl record that slowly rotates
*/
function draw() {
    background("white");

    drawRecordPlayer();
    drawDetails();
    drawDisk();
    drawTonearm();

    noStroke();
}

/**
 * Draws the two elements of the record player:
 * gray rectangle and black vertical rectangle
 */
function drawRecordPlayer() {
    // gray element
    push();
    fill('#dad8d5')
    rect(50, 50, 500, 300, 20);
    pop();

    // black element 
    push();
    fill('#1c1b1b');
    rect(450, 55, 90, 290);
    pop();
}

/**
 * Draws the vinyl record (disk) using the loaded image 
 * and makes it slowly rotate 
 */
function drawDisk() {
    push();
    imageMode(CENTER);
    translate(disk.x, disk.y);
    rotate(frameCount * 0.7);
    image(diskImg, 0, 0, disk.width, disk.height);
    pop();
}

/**
 * Draws the tonearm of the record player
 */
function drawTonearm() {
    // gray quad on the top right
    push();
    fill('#8a8a8a');
    quad(482, 55, 510, 65, 490, 110, 447, 95);
    pop();

    // black quad
    push();
    fill('#191919');
    quad(490, 110, 447, 95, 434, 145, 455, 153);
    pop();

    // the two light gray pieces
    push();
    fill('#aca8a8');
    quad(metalllicPiece1.x1, metalllicPiece1.y1, metalllicPiece1.x2, metalllicPiece1.y2, metalllicPiece1.x3, metalllicPiece1.y3, metalllicPiece1.x4, metalllicPiece1.y4);
    quad(metalllicPiece2.x1, metalllicPiece2.y1, metalllicPiece2.x2, metalllicPiece2.y2, metalllicPiece2.x3, metalllicPiece2.y3, metalllicPiece2.x4, metalllicPiece2.y4);
    pop();

    // small white rectangle 
    push();
    fill('#fefdfd');
    translate(metalllicPiece1.x4, metalllicPiece1.y4,)
    rotate(52);
    rect(0, 0, 40, 5);
    pop();
}

/** 
 * Draws the details on the record player - two small rectangles and an ellipse
 */
function drawDetails() {
    // black rectangle
    push();
    fill('#000000');
    rect(100, 305, 70, 20);
    pop();

    // red rectangle 
    push();
    fill('#6d0e0e'); // red
    rect(370, 315, 35, 10);
    pop();

    // light pink ellipse 
    push();
    fill('#e5cdcd'); // light pink
    ellipse(472, 310, 40, 35);
    pop();
}

/**
 * Plays the music when the user presses "ENTER"
 */
function playMusic() {
    if (!music.isPlaying()) {
        music.play();
    }
}
