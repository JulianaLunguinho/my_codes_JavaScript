function bhaskara (a, b, c) {
    let delta = b**2 - 4 * a * c;
    let x1 = (-b + Math.sqrt(delta))/2*a; 
    let x2 = (-b - Math.sqrt(delta))/2*a;

    if(delta < 0) {
        return "Delta negativo. Sem solução.";
    } else {
        return x1, x2;
    }
}