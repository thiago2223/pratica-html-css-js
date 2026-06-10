//Crie uma função que receba um Array de números como parâmetro e use um laço de repetição para retornar o maior número dentro desse Array.

function maior(nums = [2, 4 ,5 ,6]) {
    let maiorNum = nums[0]
    for (let index = 1; index < nums.length; index++) {
        if (nums[index] > maiorNum) {
            maiorNum = nums[index]
        }
    }
    return maiorNum
}
console.log(maior([2, 4, 5, 6]))

//podemos usar var maiornumero = math.max(...numeros)

let numeros = [4, 5, 6, 2 ,8 , 2, 9, 0, 33, 509, 4, 5, 1, 2, 3, 132, 54, 764, 952, 83, 82]                    // a diferença de codigo é grande
let maiorNumero = Math.max(...numeros)
console.log(maiorNumero)                                                                        