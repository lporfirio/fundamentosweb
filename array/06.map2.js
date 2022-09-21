const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome":"caneta", "preco": 7.50}',
]

// retornar um array apenas com os preços


const passarObj = e => JSON.parse(e)
const apenasPreco = e => e.preco

const resultado = carrinho.map(passarObj).map(apenasPreco)

console.log(resultado)