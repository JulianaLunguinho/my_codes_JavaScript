function calcularMedia() {
    let nota2 = Number((document.getElementById('n2')).value);
    let nota3 = Number((document.getElementById('n3')).value);
    let nota5 = Number((document.getElementById('n5')).value);

    if(nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota5 < 0 || nota5 > 10) {
        alert("Erro! Digite notas entre 0 e 10.")
    } else {
        let media = ((nota2 * 2 + nota3 * 3 + nota5 * 5) / 10).toFixed(1)
        res.innerHTML = `Sua média é ${media}.`
    }
}

/*Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é: 
(n1 * 2 + n2 * 3 + n3 * 5) / 10 */
