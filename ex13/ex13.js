function verificar() {
    var veltxt = document.getElementById("vel");
    let vel = Number(document.getElementById("vel").value);
    let multa = 0;
    if (veltxt.value.length == 0) {
        alert("Por favor, insira a velocidade do carro.");
        return;
    }
    if (vel > 80) {
        multa = (vel - 80) * 5;
        document.body.innerHTML = `<div id="resultado" style="display: block; margin: 0 auto; text-align: center; color: red;"> 
        <p id="res">Você foi multado em R$ ${multa}</p>
        <button onclick="limpar()">Ok</button>
    </div>`;
    } else {
        document.body.innerHTML = `<div id="resultado" style="display: block; margin: 0 auto; text-align: center; color: green;">
        <p id="res">Tudo ok, você está dentro do limite de velocidade!</p>
        <button onclick="limpar()">Ok</button>
    </div>`;
    }
}
function limpar() {
    window.location.reload();
}
