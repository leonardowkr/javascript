let listaProdutos = document.getElementById('lista-produtos');
let total = document.getElementById('valor-total');
let preco;
let valorTotal = 0;

function adicionar() {
    if (
        document.getElementById('quantidade').value == '' ||
        document.getElementById('quantidade').value <= 0
    ) {
        alert('Quantidade de produto inválida! Insira um valor válido.');
        document.getElementById('quantidade').value = 1;
        return;
    }
    let quantidade = document.getElementById('quantidade').value;
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    preco = valorUnitario * quantidade;
    listaProdutos.innerHTML =
        listaProdutos.innerHTML +
        `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span></section>`;
    valorTotal = valorTotal + preco;
    total.innerHTML = `R$${valorTotal}`;
    document.getElementById('quantidade').value = 1;
}

function limpar() {
    valorTotal = 0;
    listaProdutos.innerHTML = '';
    total.innerHTML = 'R$';
}
