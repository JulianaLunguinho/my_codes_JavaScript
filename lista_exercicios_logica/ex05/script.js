function calcular () {
    let num = parseInt((document.getElementById("num")).value);
    let ant = num - 1;
    let res = document.getElementById("res");
    res.innerHTML = `O antecessor de ${num} é ${ant}`
    
    console.log(res, num);
}