let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio!';

function clicouConsole(){
    console.log('O botão foi clicado.');
}
function clicouAlerta(){
    alert('Eu amo JS!');
}
function clicouPrompt(){
    let cidade = prompt('Insira o nome de uma cidade do Brasil.');
    alert(`Estive em ${cidade} e lembrei de você.`);
}
function clicouSoma(){
    let num1 = Number(prompt('Insira um número.')); 
    let num2 = Number(prompt('Insira outro número.'));
    let soma = num1 + num2;
    alert(`A soma dos dois números é ${soma}`);
}