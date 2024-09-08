let chute, numeroAleatorio;
let tentativas = 1;
let range=1000;
numeroAleatorio = parseInt(Math.random()*range+1);
while (numeroAleatorio != chute) {
    chute = parseInt(prompt(`Escolha um número de 1 a ${range}.`));
    if (chute == numeroAleatorio) {
        break;
    } else {
        if (chute > numeroAleatorio) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você acertou o número secreto com ${tentativas} ${palavraTentativa}`);
