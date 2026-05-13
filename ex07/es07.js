function alternarModo() {
    var modo = document.getElementsByName("modo")
    if (modo[0].checked) {
        document.body.classList.toggle("modoClaro")
    } else {
        document.body.classList.toggle("modoEscuro")
    }
}