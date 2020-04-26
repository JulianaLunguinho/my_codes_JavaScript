function calcular() {
    let dias = Number((document.getElementById("dias")).value);
    let meses = Number((document.getElementById("mes")).value);
    let anos = Number((document.getElementById("anos")).value);
    let res = document.getElementById("res");

    if(dias < 0 || meses < 0 || anos < 0) {
        res.innerHTML = "Informe valores positivos para calcular."
    } else {
        let resultado = dias + meses * 30 + anos * 365;
        res.innerHTML = `Você tem ${resultado} dias de vida!`
    }
}