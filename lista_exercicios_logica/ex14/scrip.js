function comparar() {
   let n1 = Number((document.getElementById('num')).value);

   let resultado = n1 > 10 ? "É MAIOR QUE 10!" : "NÃO É MAIOR QUE 10!"

   res.innerHTML = `${n1} ${resultado}`
}

/* Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!*/
