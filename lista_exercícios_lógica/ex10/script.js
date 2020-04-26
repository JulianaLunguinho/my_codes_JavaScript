function calcular() {
    let custo = Number((document.getElementById("cus")).value)
    let resultado = document.querySelector("div#res")

    let preco = (custo + 0.28 * custo + 0.45 * custo).toLocaleString('pt-br', {style:'currency', currency:'brl'})
    resultado.innerHTML = `O preço do carro para o consumidor é ${preco}.`
}



/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e 
dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e 
os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
calcular e escrever o custo final ao consumidor*/