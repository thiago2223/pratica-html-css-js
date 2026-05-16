function verificar() {
    var numeroInput = document.getElementById('numberInput')
    var numero = Number(document.getElementById('numberInput').value)
    var resultado = document.getElementById('resultado')
    if (numeroInput.value === '') {
        resultado.textContent = 'Por favor, insira um número.'
        return
    }
    if (numero % 2 === 0) {
        resultado.textContent = `O número ${numero} é par.`
    } else {
        resultado.textContent = `O número ${numero} é impar.`
    }
}