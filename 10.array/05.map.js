// For com propósito, cria um novo array com os valores transformados


const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function (e) { return e * 2 })

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
const paraDinheiro2 = e => `R$ ${e},00`

resultado = nums.map(soma10)

console.log(resultado)
resultado = resultado.map(triplo)
console.log(resultado)
resultado = resultado.map(paraDinheiro)
console.log(resultado)

let resultado2 = nums.map(soma10).map(triplo).map(paraDinheiro2)
console.log(resultado2)