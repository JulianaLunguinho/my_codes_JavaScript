function calcularArea() {
    let base = Number((document.getElementById("base")).value);
    let altura = Number((document.getElementById("alt")).value);
    let res = document.getElementById("res");

    if (base < 0 || altura < 0) {
        res.innerHTML =  "Informe valores positivos para base e altura"
    } else {
        var area = base * altura;
        res.innerHTML = `A área do retângulo é ${area}`
    }
};