function primos (n) {
    var pri = [2];

    for (i=3; i<=n; i++) {
        for(c=2; c<i; c++) {
            if(i%c == 0) {
                var ehprimo = 0;
                c = i;
            } else {
                var ehprimo = 1;
            }
        }
        if (ehprimo == 1) {
            pri.push(i)
        }
    }
    if (n<=1) {
        return "Não há números primos."
    } else {
        return pri
    }
}