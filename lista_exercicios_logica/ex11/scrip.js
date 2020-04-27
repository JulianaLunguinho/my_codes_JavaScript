function calcularSalario() {

    let carrosvds = Number((document.getElementById("carv")).value);
    let comissaopc = Number((document.getElementById("compc")).value);
    let valorVendas = Number((document.getElementById("vds")).value);
    let salfixo = Number((document.getElementById("sal")).value);
    let resultado = document.getElementById("res");

    if (salfixo <= 0 || carrosvds < 0 || comissaopc < 0 || valorvendas < 0) {
        alert("ERRO! Verifique os valores e tente novamente.")
    } else {
        let salario = salfixo + carrosvds * comissaopc + 0.05 * valorVendas;
        let salarioMoeda = salario.toLocaleString('pt-br', { style: 'currency', currency: 'brl' })
        resultado.innerHTML = `Seu salário este mês é ${salarioMoeda}.`
    }
}

/*Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor. */
