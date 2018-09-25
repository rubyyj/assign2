const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(120); // light gray background
  strokeWeight(8); // Stroke weight to 8 pixels
  //ellipse(480, 250, 190, 190);
  // The rectangle draws on top of the ellipse
  // because it comes after in the code
  //rect(500, 280, 260, 20);
  //point(240, 60);

//triangle(347, 54, 392, 9, 392, 66);

//quad(158, 55, 199, 14, 392, 66, 351, 107);

//rect(50, 50, 80, 80)

//ellipse( 200, 200, 50, 50);
//fill(255);
//text ("4", 200,200);
// black 3 
fill(0); 

rect(300,200,25,80);
rect (330,168,25,25);
rect (330,287,90,25);
rect (428,200,25,80);
rect (460,287,90,25);
rect (555,200,25,80);
rect (525,168,25,25);

//white 5
strokeWeight(0);
fill (255);
rect (380,100,115,25);
rect(380,125,25,80);
rect (380,200,115,25);
rect(490,225,25,100);
rect (380,320,115,25);
rect (355,297,25,25);

//red 1 

fill (255,0,0);
rect (370,230,160,25);
rect (370,230,25,50);



}

// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
