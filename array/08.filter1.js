const produtos = [
    { nome: 'notebook', preco: 2500, fragil: true },
    { nome: 'ipad pro', preco: 4200, fragil: true },
    { nome: 'copo de vidro', preco: 12.49, fragil: true },
    { nome: 'copo de plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (p) { // retorna true or false
    return p.preco > 5000
}))

function produtosCaros(p) {
    if (p.preco >= 500) return true
}
function produtoFragil(p) {
    if (p.fragil == true) return true
}

const selecionados = produtos.filter(produtoFragil).filter(produtosCaros)
console.log(selecionados)

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))