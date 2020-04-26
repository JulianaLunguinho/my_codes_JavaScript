let lista = [];

function adicionar() {
    let numero = Number((document.getElementById("num")).value);
    let resultado = document.getElementById("res");
    resultado.innerHTML = "";

    if (numero < 1 || numero > 100) {
        window.alert("Erro! Digite um número entre 1 e 100")
    } else if (lista.indexOf(numero) == -1) {
        lista.push(numero);

        lis.innerHTML = "";

        for(pos in lista) {
            let item = document.createElement("option");
            item.text = `Valor ${lista[pos]} adicionado`;
            item.value = `valor ${lista.indexOf(pos)}`
            lis.appendChild(item)
        }
    
    } else {
        window.alert("O número já foi adicionado");       
    }
    num.value = ''
    num.focus()    
}

function analisar() {
    if (lista.length == 0) {
        window.alert("Erro! Adicione números à lista!");
    } else {
        lista.sort()
        let soma = 0;

        for(pos in lista) {            
            soma = soma + lista[pos];
        }

        let media = soma / lista.length;

        let resultado = document.getElementById("res");

        resultado.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados. </p>
        <p> O maior número cadastrado foi ${lista[lista.length - 1]}. </p> 
        <p> O menor número cadastrado foi ${lista[0]}. </p>
        <p> Somando todos os números temos ${soma}. </p> 
        <p> A média dos valores cadastrados é ${media}.</p>`
    }

}

