//Crie uma função chamada verificarPar(n) que receba um número como parâmetro e retorne true se for par e false se for ímpar.
let n = Number(prompt('Digite um número para saber se ele é par'))
function verificarPar(n) {
    if (n % 2 === 0) {
        alert(`${n} é par`)
        return true
    } else {
        alert(`${n} é impar`)
        return false
    }
}
verificarPar(n) //chamar a função já que não tem um botão no HTML
