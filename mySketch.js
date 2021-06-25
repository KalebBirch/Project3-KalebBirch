var circleX = 300;
var circleY = 300;
var circleSize = 40;
var X = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	textAlign(LEFT, CENTER);
	textSize(20);
	strokeWeight(5);
	frameRate(60);
	rect(-30,windowHeight - 60, 200, 200); //rectangle outlining my name 
	text("Kaleb Birch", 30 , windowHeight -30); 
	fill(200);
	strokeWeight(5);
}



function draw() {
	fill(int(random(256)), int(random(256)), int(random(256)));
	ellipse(circleX, circleY, circleSize, circleSize);
	var distancetocircle = dist(circleX, circleY, mouseX, mouseY); // allows for the circle to reappear at a different location when caught by player's mouse
	if(distancetocircle < circleSize/2) {
		circleX = random(width); // ranomizer for where the cirlce will appear once hovered over
		circleY = random(height);
		X = X + 1; // adds one point to score everytime circle is caught 
		background(255); // the background change will reset the other circle and previous score after circle is hovered over
	}
	fill(0);
	text(("Score:" + X), windowWidth/2, 50);
		if(X>=20) { // win condition (get to 20 to beat the game)
	background(255);
	text("You Win!", windowWidth/2, windowHeight/2);//win screen
	textSize(60);
	textAlign(CENTER);
		}
}
