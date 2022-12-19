const fs = require('fs') // fs é um módulo do node. filesystem

const produto = {
    nome: 'celular',
    preco: 1249.99,
    desconto: 0.15

}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { 
    console.log(err || 'arquivo salvo!')
})