
function operacao() {
    const num1 = Number(document.querySelector("#num1").value)
    const num2 = Number(document.querySelector("#num2").value)
    const adic = document.querySelector("#adic").checked
    const subtr = document.querySelector("#subtr").checked
    const multp = document.querySelector("#multp").checked
    const divs = document.querySelector("#divs").checked
    const res = document.querySelector("#res")
    switch (true) {
        case adic:
            res.innerHTML = `${num1} + ${num2} '= ${num1 + num2}`
            break
        case subtr:
            res.innerHTML = `${num1} - ${num2} '= ${num1 - num2}`
            break
        case multp:
            res.innerHTML = `${num1} * ${num2} '= ${num1 * num2}`
            break
        case divs:
            res.innerHTML = `${num1} / ${num2} '= ${num1 / num2}`
            break
    }
}