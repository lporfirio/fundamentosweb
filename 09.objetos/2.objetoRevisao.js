// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'cadeira' // adicionar atributo
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)

delete produto.preco // deletar atributo
delete produto['marca do produto']

console.log(produto)


// podemos colocar outros objetos dentro do objeto e também array de objetos
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'raul',
        idade: 56,
        endereco: {
            logradouro: 'rua abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }, {
        nome: 'ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        //....
    }
}

// acessar a partir da notação ponto
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'av gigante'

delete carro.condutores

console.log(carro)