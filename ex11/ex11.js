function verificar() {
    var idade = document.getElementById('idade').value
    if (idade < 16) {
        alert('Você não pode votar')
    } else if (idade >= 16 && idade < 18 || idade > 70) {
        alert('O voto é opcional para você')
    } else {
        alert('O voto é obrigatório para você')
    }
}