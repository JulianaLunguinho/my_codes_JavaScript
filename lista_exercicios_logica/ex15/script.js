function calcularPosOuNeg () {
    let numero = Number((document.getElementById("num")).value);
    let resposta = "Positivo"
    if(numero < 0) {
        resposta = "Negativo"
    }

    res.innerHTML = `O número ${numero} é ${resposta}!`
};