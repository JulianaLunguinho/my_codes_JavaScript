function fatorial (n) {
    var fat = 1;
    
    for(i = 1; i <= n; i++) {
        fat = fat * i;
    }
    return fat;
}