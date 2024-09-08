let amigos = [];
let listaIncluidos;
let Sorteados;
function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    listaIncluidos = document.getElementById('lista-amigos');
    amigos.push(nome);
    if (listaIncluidos.textContent == '') {
        listaIncluidos.textContent = `${nome}`;
    } else {
        listaIncluidos.textContent = `${listaIncluidos.textContent}, ${nome}`;
    }
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    embaralha(amigos);
    for (let i = 0; i < amigos.length; i++) {
        Sorteados = document.getElementById('lista-sorteio');
        if (amigos.length - 1 == i) {
            Sorteados.innerHTML =
                Sorteados.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        } else {
            Sorteados.innerHTML =
                Sorteados.innerHTML +
                amigos[i] +
                '-->' +
                amigos[i + 1] +
                '<br>';
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [
            lista[indiceAleatorio],
            lista[indice - 1],
        ];
    }
}
function reiniciar() {
    document.getElementById('nome-amigo').value = '';
    listaIncluidos.textContent = ``;
    Sorteados.innerHTML = '';
    amigos = [];
}
