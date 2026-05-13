function calcular() {
    var raio = Number(document.querySelector("#txtraio").value)
    var pi = 3.14
    var area = pi * raio * raio
    var res = document.querySelector("div#res")
    res.style.display = "block"
    res.innerHTML = `<p>A área do circulo equivale a ${area}</p>`
}