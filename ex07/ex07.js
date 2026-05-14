var botao_selecionado_modo = null;
var demais_botoes = null;
function Modo1() {
    botao_selecionado_modo = document.getElementById("Modo1");
    demais_botoes = document.querySelectorAll("button:not(#Modo1)");
    botao_selecionado_modo.style.backgroundColor = "rgb(122, 147, 54)";
    botao_selecionado_modo.style.color = "white";
    demais_botoes.forEach(botao => {
        botao.style.backgroundColor = "rgba(255, 255, 255, 0.442)";
        botao.style.color = "var(--cor-de-texto-2)";
    });
    document.body.classList.add("modo-1");
    document.body.classList.remove("modo-2");
    document.body.classList.remove("modo-3");
}
function Modo2() {
    botao_selecionado_modo = document.getElementById("Modo2");
    demais_botoes = document.querySelectorAll("button:not(#Modo2)");
    botao_selecionado_modo.style.backgroundColor = "rgb(122, 147, 54)";
    botao_selecionado_modo.style.color = "white";
    demais_botoes.forEach(botao => {
        botao.style.backgroundColor = "rgba(255, 255, 255, 0.442)";
        botao.style.color = "var(--cor-de-texto-2)";
    });
    document.body.classList.add("modo-2");
    document.body.classList.remove("modo-1");
    document.body.classList.remove("modo-3");
}
function Modo3() {
    botao_selecionado_modo = document.getElementById("Modo3");
    demais_botoes = document.querySelectorAll("button:not(#Modo3)");
    botao_selecionado_modo.style.backgroundColor = "rgb(122, 147, 54)";
    botao_selecionado_modo.style.color = "white";
    demais_botoes.forEach(botao => {
        botao.style.backgroundColor = "rgba(255, 255, 255, 0.442)";
        botao.style.color = "var(--cor-de-texto-2)";
    });
    document.body.classList.add("modo-3");
    document.body.classList.remove("modo-1");
    document.body.classList.remove("modo-2");
}