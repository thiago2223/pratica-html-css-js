var msg = document.querySelector("p#msg")
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
msg.innerHTML += `<br>Manipulando o DOM com sucesso!`