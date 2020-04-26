function calcularSal() {
    let salarioAtual = Number((document.getElementById("sal")).value)
    let percentual = Number((document.querySelector("input#percent")).value)
    
    let novoSal = (percentual / 100 * salarioAtual + salarioAtual).toLocaleString('pt-br', {style: 'currency', currency:'brl'})

    let resultado = document.getElementById("res")
    resultado.innerHTML = `O novo salário é ${novoSal}.`
}


// Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
// Calcular e escrever o valor do novo salário. 