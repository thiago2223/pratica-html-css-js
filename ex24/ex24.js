//Crie um array com 4 nomes. Peça ao usuário para digitar um nome e use o método indexOf() para verificar se o nome que ele digitou está dentro do array. Se sim, mostre a // 1. Cria o array com 4 nomes
var nomes = ["joao", "maria", "pedro", "caio"];

// 2. Pede ao usuário para digitar um nome
var nomeBuscado = prompt("Digite um nome para a busca:");

// 3. Usa o método indexOf (sem aspas!) para achar a posição
var posicao = nomes.indexOf(nomeBuscado);

// 4. Verifica se a posição é diferente de -1 (significa que foi encontrado)
if (posicao !== -1) {
    // Usa alert para mostrar a mensagem na tela
    alert(`Nome encontrado! Posição: ${posicao}`);
} else {
    alert("Nome não encontrado!");
}