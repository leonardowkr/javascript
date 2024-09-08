function sortear() {
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;
    if (de > ate) {
        alert('Campo "Do número" não deve ser menor que "Até o número". Verifique!');
        return;
    }
    if(de+quantidade<ate){
        alert("Não há números suficientes para sorteio. Verifique!");
        return;
    }
    let sorteados = [];
    for (let i = 0; i < quantidade; i++) {
        let numero = obterNumAleatorio(de, ate);
        while (sorteados.includes(numero)) {
            numero = obterNumAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    let resultado = document.getElementById('paragrafo_resultado');
    resultado.innerHTML = `Numeros sorteados: ${sorteados}`;
    alterarStatusBotao();
}

function obterNumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    resultado.innerHTML = `<label class="texto__paragrafo" id="paragrafo_resultado">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
}
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
    }
}
