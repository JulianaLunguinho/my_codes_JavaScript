function converterParaDecimal() {
    let num = (document.getElementById("num2")).value
    let base = Number((document.getElementById("bs2")).value)

    if(base > 16 || base < 2) {
        res.innerHTML = "ERRO! Use bases entre 2 e 16!"
        return;
    }

    let arrayLetras = String(num).split('');
    let arrayNum = [];
    for(let i = 0; i < arrayLetras.length; i++){
        let number = arrayLetras[i].toUpperCase();
        switch (number) {
            case "A":
                arrayNum.push(10)
                break;
            case "B":
                arrayNum.push(11)
                break;
            case "C":
                arrayNum.push(12)
                break;
            case "D":
                arrayNum.push(13)
                break;
            case "E":
                arrayNum.push(14)
                break;
            case "F":
                arrayNum.push(15)
                break;
            default:
                arrayNum.push(Number(arrayLetras[i]))
                break;
        };
    };

    let resultado = 0;
    let exp = 0;

    for(let i = arrayNum.length - 1; i >= 0; i--) {
        let numero = Number(arrayNum[i]);

        if(numero >= base) {
            res.innerHTML = `ERRO! O número ${arrayLetras[i]} não é válido na base ${base}!`
            return;
        }

        resultado = resultado + (numero * base ** exp);
        exp++
    }
    res.innerHTML = `O número ${num} de base ${base} em base decimal é ${resultado}.`
    console.log(num, base, resultado, arrayLetras, arrayNum);
}

function converterOutraBase() {
    let num = Number((document.getElementById("num1")).value)
    let base = Number((document.getElementById("bs1")).value)
    let resposta = [];

    if (base > 10 || base < 2) {
        res.innerHTML = "ERRO! Use bases entre 2 e 9!"
        return;
    }

    var numero = num;
    while (numero >= base) {
        resposta.unshift(Math.floor(numero%base));
        numero = Math.floor(numero / base);
        console.log(numero);
    }
    resposta.unshift(numero);

    let resultado = resposta.join('');

    res.innerHTML = `O número ${num} em base ${base} é igual a ${resultado}.`;
}