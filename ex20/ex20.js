//pedir um numero ao usuario e com um for, ir gerando uma tabuada
let entrada = prompt('Digite um número:')
while (entrada === "" || isNaN(entrada) || entrada === null) {
    entrada = prompt('⚠️ Entrada inválida! Por favor, digite um número:')
}
var res = document.querySelector("#res")
let numero = Number(entrada)
for (let multiplicador = 1; multiplicador <=10; multiplicador++) {
    res.innerHTML += `<br>${numero} x ${multiplicador} = ${numero * multiplicador}`
}
