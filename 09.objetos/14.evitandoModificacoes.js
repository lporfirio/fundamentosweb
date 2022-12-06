// Object.preventExtensions - evita a possibilidade de aumentar a quantidade de atributos do obj

const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99 , tag: 'promoção'
})

console.log('extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // alterar valor é possível
produto.descricao = 'borracha escolhar branca' // adicionar atributo NÃO é possível
delete produto.tag // deletar atributo é possível

console.log(produto)

// Object.seal - impossibilita deletar ou adicionar atributos
const pessoa = { nome: 'juliana', idade: 35}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // criar atributo não é possível
delete pessoa.nome  // deletar atributo não é possível
pessoa.idade = 29 // alterar valor é possível 
console.log(pessoa)

// Object.freeze = selado + valores constantes