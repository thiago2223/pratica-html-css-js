function calcular() {
    const numero1 = document.getElementById('num1')
    const numero2 = document.getElementById('num2')
    if (numero1.value.length == "" || numero2.value.length == "") {
        alert('⚠️ Entrada inválida! Por favor, digite um número')
    } else {
        const num1 = Number(document.getElementById('num1').value)
        const num2 = Number(document.getElementById('num2').value)
        const adic = document.getElementById('adic').checked
        const subtr = document.getElementById('subtr').checked
        const multp = document.getElementById('multp').checked
        const divs = document.getElementById('divs').checked
        let res = document.getElementById('res')
        const botaoOk = document.getElementById('ok')
        botaoOk.style.display = "block"
        switch (true) {
            case (adic):
                res.innerHTML += `<br>${num1} + ${num2} = ${num1 + num2}`
                break
            case (subtr):
                res.innerHTML += `<br>${num1} - ${num2} = ${num1 - num2}`
                break
            case (multp):
                res.innerHTML += `<br>${num1} x ${num2} = ${num1 * num2}`
                break
            case (divs):
                res.innerHTML += `<br>${num1} ÷ ${num2} = ${num1 / num2}`
                break
        }
    }
}
function ok() {
    window.location.reload()
}