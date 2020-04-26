function calcular() {
    let votos = Number((document.getElementById("vts")).value);
    let brancos = Number((document.getElementById("bran")).value);
    let nulos = Number((document.getElementById("nuls")).value);
    let validos = Number((document.getElementById("vals")).value);

    let brancospercent = brancos / votos * 100;
    let nulospercent = nulos / votos * 100;
    let validospercent = validos / votos * 100;

    res.innerHTML = `Sua cidade teve ${validospercent}% de votos válidos, ${brancospercent}% de votos brancos e ${nulospercent}% de votos nulos.`
}

// Escreva um algoritmo para ler o número total de eleitores de um município, 
// o número de votos brancos, nulos e válidos. Calcular e escrever o percentual 
// que cada um representa em relação ao total de eleitores.