//Crie um array com 5 notas de um aluno. Use um laço for para percorrer todos os itens do array, somar todas as notas e depois calcular e mostrar a média final desse aluno.
var notas = [8, 8 , 9 , 7.5, 10]
let soma = 0
for (let indice_soma = 0; indice_soma < notas.length; indice_soma++) {
     soma += notas[indice_soma]
     console.log(soma)
}
media = soma / 5
console.log(media)