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

	let circleA = {
		posX: 200,
		posY: 200,
		diametro: 75,
	}

	fill('blue');
	ellipse(circleA.posX, circleA.posY, circleA.diametro);

	let circleB = {
		posX: mouseX,
		posY: mouseY,
		diametro: 50,
	}

	let somaRaios = (circleA.diametro + circleB.diametro) / 2;
	let cor = 'red'

	//raiz de ((xa - xb)^2 + (ya - yb)^2)

	function caldistancia() {
		let radicando = (circleA.posX - circleB.posX) ** 2 + (circleA.posY - circleB.posY) ** 2;
		let distancia = sqrt(radicando);
		return distancia;
	}
	
	if (caldistancia() <= somaRaios) {
		cor = 'green'
	}

	fill(cor);
	ellipse(circleB.posX, circleB.posY, circleB.diametro);

}