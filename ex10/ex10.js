const spanNumero = document.getElementById('numero');
function somar() {
    let numero = parseInt(spanNumero.textContent); // Converte o texto para um número inteiro usando parseInt e o textContent para acessar o conteúdo do span
    spanNumero.textContent = ++numero; // Incrementa o número e atualiza o conteúdo do span com o novo valor
}
function subtrair() {
    let numero = parseInt(spanNumero.textContent);
    spanNumero.textContent = --numero;
}