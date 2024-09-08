function comprar() {
    if(document.getElementById('qtd').value <0){
        alert('Número inválido! Verifique a quantidade de ingressos.');
        document.getElementById('qtd').value = 0;
        return;
    }
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    tipoIngressoQtd = `qtd-${tipoIngresso}`;
    let quantidadeDisponivel =
        parseInt(document.getElementById(tipoIngressoQtd).textContent);
    if (quantidade > quantidadeDisponivel) {
        if (quantidadeDisponivel == 0) {
            alert('Ingressos esgotados! Selecione outro tipo de ingresso');
        } else {
            alert('Quantidade de ingressos indisponíveis! Insira outro valor.');
        }
    } else {
        quantidadeDisponivel -= quantidade;
        document.getElementById(`qtd-${tipoIngresso}`).textContent =
            quantidadeDisponivel;
        alert('Compra realizada com sucesso!');
    }
}
