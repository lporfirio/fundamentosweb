// criar função que pega uma array de números e retornar a soma de seus itens

let numbers = [2, 3, 5, 6, 8]

let numbers2 = [9, 23, 123, 22, 23, 23, 2]

function soma(numberArray) {
    let pos = 0
    for (var element of numberArray) {
        pos += element
    }
    return pos
}

//console.log(soma(numbers2)) // a let numbers substitue o parâmetro da funcão soma()
//console.log(soma(numbers))



idades = [15,46,75,34,23]

function soma2(array) {
total = 0
for (posicao of array) {
    total = total + posicao
    console.log (total)
} return total
} 

console.log(soma2(idades))