/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */


// will create it with createGum()
let gums = [];

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);

    gum = createGum();
}

function createGum() {
    const newGum = {
        x: random(0, 500),
        y: random(0, 500),
        size: 20,
        fill: {
            r: random(0, 255),
            g: random(0, 255),
            b: random(0, 255),
        },
    };
    return newGum;
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('pink');

    // loop to add infinite gum 
    for (let gum of gums) {
        drawGum(gum);
    }
}

function drawGum(gum) {
    push();
    noStroke();
    fill(gum.fill.r, gum.fill.g, gum.fill.b);
    ellipse(gum.x, gum.y, gum.size);
    pop();
}

function mouseClicked() {
    let gum = createGum();
    gums.push(gum);
}