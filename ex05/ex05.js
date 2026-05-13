
function converter() {
    var div = document.querySelector("div#conversao")
    var botao = document.querySelector("button")
    var temp = Number(document.querySelector("#temp").value)
    var fahrenheit = (temp * 1.8) + 32
    var res = document.querySelector("div#res")
    res.style.display = "block"
    res.innerHTML += `<p>A temperatura de ${temp}°C equivale a ${fahrenheit}°F</p>`
    botao.style.display = "block"
    div.style.display = "none"
}

function limpar() {
    window.location.reload()
}