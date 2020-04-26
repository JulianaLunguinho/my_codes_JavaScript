let screenSize = {
	width: 500,
	height: 500
};

function setup() {
	createCanvas(screenSize.width, screenSize.height);
}

function draw() {

	clear(0, 0, screenSize.width, screenSize.height);

	background('white');

	let Ax = 50;
	let Ay = 50;
	fill("red")
	rect(Ax, Ay, 50, 50);

	let cor = "blue"

	if (Ax < mouseX + 50 && Ax + 50 > mouseX) {
		if (Ay < mouseY + 50 && Ay + 50 > mouseY) {
			cor = "green"
		}
	}

	fill(cor)
	rect(mouseX, mouseY, 50, 50);
}