function getPreco(imposto = 0.0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4500,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

/********************** */

const carro = {
    preco: 58000,
    desc: 0.1
}

// função CALL

console.log(getPreco.call(carro))

// função APPLY

console.log(getPreco.apply(carro))

// diferença na hora de chamar os parâmetros

console.log(getPreco.call(carro, 0.18, '$'))
console.log(getPreco.apply(carro, [0.2, '$'])) // usa array