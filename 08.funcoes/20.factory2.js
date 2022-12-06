function criarProduto(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('computador', 4000.00))
console.log(criarProduto('guitarra', 2200.00))