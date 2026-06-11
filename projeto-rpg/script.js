let vidaHeroi = 100
let vidaMonstro = 50
let mochila = ['pocao-p', 'pocao-m', 'pocao-g']
function atualizarTela() {
    let listaHTML = document.querySelector('#lista-mochila')
    listaHTML.innerHTML = ``
    for (let i = 0; i < mochila.length; i++) {
        listaHTML.innerHTML += `<li>
            <button onclick = "usarItem(${i})"> ${mochila[i]}
        </li>`
    }

}

function atacar() {
    vidaMonstro = vidaMonstro - 10
    document.querySelector('#monster-hp').innerHTML = `${vidaMonstro}`
    document.querySelector('#game-text').innerHTML += 'Você atacou o Bug de Produção e causou 10 de dano!'
    atualizarTela()
    if (vidaMonstro > 0) {
        turnoDoMonstro()
    } else {
        alert('Você ganhou!!');
        window.location.reload();
    }
}
function usarItem(posicao) {
    vidaHeroi = vidaHeroi + 20
    if (vidaHeroi > 100) {
        alert('A sua vida só pode ser abaixo ou igual a 100')
        vidaHeroi = 100
    }
    document.querySelector('#hero-hp').innerHTML = `${vidaHeroi}`;
    
    // CORREÇÃO: Adicionado .innerHTML antes do +=
    document.querySelector('#game-text').innerHTML += `<br>Você usou um item e recuperou vida!`;

    // CORREÇÃO LOGÍSTICA CRÍTICA: Primeiro tiramos o item e atualizamos a tela!
    mochila.splice(posicao, 1);
    atualizarTela();
    if (vidaMonstro > 0) {
        turnoDoMonstro()
    }
    if (vidaHeroi <= 0) {
        alert('Você perdeu! :(')
        window.location.reload()
    }
    mochila.splice(posicao, 1)
    atualizarTela()
}
function turnoDoMonstro() {
    vidaHeroi = vidaHeroi - 15;
    
    // CORREÇÃO: Adicionado .innerHTML antes do sinal de igual (=)
    document.querySelector('#hero-hp').innerHTML = `${vidaHeroi}`;
    
    // CORREÇÃO: Adicionado .innerHTML antes do +=
    document.querySelector('#game-text').innerHTML += `<br>O bug de produção te atacou e te deu -15 de hp!`;
    
    // Se o herói morrer após o ataque do monstro, encerra o jogo
    if (vidaHeroi <= 0) {
        alert('Você perdeu! :(');
        window.location.reload();
    }
}
atualizarTela()