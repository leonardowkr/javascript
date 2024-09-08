let a = prompt('Insira um número três números (1)');
let b = prompt('Insira um número três números (2)');
let c = prompt('Insira um número três números (3)');
if (a > b) {
    if (a > c) {
        if (b > c) {
            document.write(
                'Números de forma crescente: ' + a + ' ' + b + ' ' + c,
            );
        } else {
            document.write(
                'Números de forma crescente: ' + a + ' ' + c + ' ' + b,
            );
        }
    }
} else {
    if (a > c) {
        document.write('Números de forma crescente: ' + b + ' ' + a + ' ' + c);
    } else if (c > b) {
        document.write('Números de forma crescente: ' + c + ' ' + b + ' ' + a);
    }
}
if (c > a) {
    if (a > b) {
        document.write('Números de forma crescente: ' + c + ' ' + a + ' ' + b);
    } else if (b > c) {
        document.write('Números de forma crescente: ' + b + ' ' + c + ' ' + a);
    }
}
// ou

