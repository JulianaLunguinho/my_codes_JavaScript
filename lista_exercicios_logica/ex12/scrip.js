function converterparaC() {
    let fah = Number((document.getElementById('fah')).value);

    let celsius = ((fah - 32) * 5/9).toFixed(2);

    res.innerHTML = `${fah} graus Fahrenheit é igual a ${celsius} graus Celsius`
}

/*Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
correspondente em graus Celsius. C = (F - 32) x 5/9 */
