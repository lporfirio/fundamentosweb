// pessoa -> 123 -> {...}
const pessoa = { nome: 'joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'ana'}

Object.freeze(pessoa) // metódo que torna impossível a alteração do objeto

pessoa.nome = 'maria'
console.log(pessoa.nome)