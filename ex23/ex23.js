//Dado o vetor let num = [4, 8, 2, 9, 5], use o método sort() para colocar os números em ordem crescente e depois mostre os valores no console.
let num = [4, 8, 2, 9, 5]
num.sort((a, b) => a - b) // para crescente, decrescente é so b - a
console.log(num)