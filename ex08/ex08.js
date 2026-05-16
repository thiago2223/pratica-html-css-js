function mensagem() {
    let texto = document.querySelector("#texto").value;
    if (texto.lenght < 0 || texto == "") {
        alert("Digite algo na caixa de texto");
    } else {
        alert(texto);
        document.querySelector("#texto").value = "";
    }
}