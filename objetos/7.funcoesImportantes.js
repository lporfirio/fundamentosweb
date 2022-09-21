const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // - tira as chaves
console.log(Object.values(pessoa)) // - tira os valores
console.log(Object.entries(pessoa)) // - tira as chaves e os valores para uma array

Object.entries(pessoa).forEach(([chave, valor]) => { // destruction array
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { // - define uma propriedade mais controlada, com mais características
    enumerable: true, // se pode ou não ser numerda
    writable: false, // se pode ou não ser reescrita
    value: '01/01/2019' // valor 
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const obj1 = { b: 2 }
const obj2 = { c: 3, a: 4 }
const objeto = Object.assign(dest, obj1, obj2) // passa os atributos de objetos para um objeto destino

console.log(dest)

Object.freeze(objeto)
objeto.c = 123
console.log(dest)

