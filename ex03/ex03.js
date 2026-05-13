let nome = prompt("Digite seu nome: ")
const paragrafo = document.body
if (nome == "") {
    for (let aviso = 0; nome == ""; aviso++) {
        alert("Por favor, digite seu nome.")
        nome = prompt("Digite seu nome: ")
        paragrafo.innerHTML = `<h1>Seja bem vindo ${nome}</h1>`
    }
} else {
    paragrafo.innerHTML = `<h1>Seja bem vindo ${nome}</h1>`
}