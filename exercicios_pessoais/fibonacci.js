function fibonacci (n) {
    var a = 0;
    var b = 1;
    var fib = [0];

    for (i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            var a = a + b;
            fib.push(a);
        } else {
            var b = a + b;
            fib.push(b);
        }
    }
    return fib
}
