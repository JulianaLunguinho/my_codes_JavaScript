let screenSize = {
	width: 1100,
	height: 550
};

function setup() {
	createCanvas(screenSize.width, screenSize.height);
}

let wall1 = {
	posX: 0,
	posY: 0,
	width: 250,
	height: 200,
}

let wall2 = {
	posX: 0,
	posY: 250,
	width: 300,
	height: 300,
}

let wall3 = {
	posX: 250,
	posY: 0,
	width: 300,
	height: 50,
}

let wall4 = {
	posX: 300,
	posY: 100,
	width: 200,
	height: 450,
}

let wall5 = {
	posX: 550,
	posY: 0,
	width: 50,
	height: 300,
}

let wall6 = {
	posX: 500,
	posY: 350,
	width: 150,
	height: 200,
}

let wall7 = {
	posX: 600,
	posY: 0,
	width: 250,
	height: 100,
}

let wall8 = {
	posX: 650,
	posY: 150,
	width: 150,
	height: 400,
}

let wall9 = {
	posX: 850,
	posY: 0,
	width: 250,
	height: 450,
}

let wall10 = {
	posX: 800,
	posY: 500,
	width: 300,
	height: 50,
}

let player = {
	posX: 0,
	posY: 205,
	width: 40,
	height: 40,
	color: "red",
}

let gameState = 0;

let colorBackground = 'white'

let wallColor = 'rgb(0, 0, 110)'

function draw() {

	clear(0, 0, screenSize.width, screenSize.height);

	background(colorBackground);

	if (gameState == 1) {
		player.posX = mouseX - player.width / 2
		player.posY = mouseY - player.height / 2
	}

	if (mouseIsPressed &&
		mouseX >= player.posX &&
		mouseX <= player.posX + player.width &&
		mouseY >= player.posY &&
		mouseY <= player.posY + player.height) {
		gameState = 1
	}

	fill(wallColor)
	noStroke()

	rect(wall1.posX, wall1.posY, wall1.width, wall1.height)
	rect(wall2.posX, wall2.posY, wall2.width, wall2.height)
	rect(wall3.posX, wall3.posY, wall3.width, wall3.height)
	rect(wall4.posX, wall4.posY, wall4.width, wall4.height)
	rect(wall5.posX, wall5.posY, wall5.width, wall5.height)
	rect(wall6.posX, wall6.posY, wall6.width, wall6.height)
	rect(wall7.posX, wall7.posY, wall7.width, wall7.height)
	rect(wall8.posX, wall8.posY, wall8.width, wall8.height)
	rect(wall9.posX, wall9.posY, wall9.width, wall9.height)
	rect(wall10.posX, wall10.posY, wall10.width, wall10.height)

	fill(player.color)
	rect(player.posX, player.posY, player.width, player.height)

	function collision() {
		for (i = 0; i <= 9; i++) {
			let allWalls = [wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10]

			if (player.posX < allWalls[i].posX + allWalls[i].width && player.posX + player.width > allWalls[i].posX && player.posY < allWalls[i].posY + allWalls[i].height && player.posY + player.height > allWalls[i].posY) {
				gameState = 0;
			}
		}
	}

	if (collision()) {
		gameState = 0;
	}

	if (gameState == 0) {

		wallColor = 'rgb(0, 0, 110)'
		player.posX = 0;
		player.posY = 205;

		fill('white')
		stroke(20)
		textSize(30)
		text("Click no quadrado para Iniciar", 10, 500)
	}

	if (gameState == 3) {

		wallColor = 'rgb(0, 255, 0)'

		fill('black')
		stroke(20)
		textSize(60)
		text('Você Ganhou!!! :)', 290, 230)
		text('Clique na tela para reiniciar o Jogo.', 80, 300)

		if (mouseIsPressed) {
			gameState = 0
		}

	}

	if (gameState == 1 && mouseX > screenSize.width - player.width / 2) {
		gameState = 3
	}
}