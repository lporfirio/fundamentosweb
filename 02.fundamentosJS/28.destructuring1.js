// desestruturação


const pessoa = {
    nome: 'ana',
    idade: 5,
    endereço: {
        logradouro: 'rua abc',
        numero: 1000
    }
}

const { nome, idade } = pessoa // operador de  desestruturação
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // para criar váriaveis com outros nomes
console.log(n, i)

// caso não exista o atributo no objeto
const {sobrenome, bemHumorada = true} = pessoa // 
console.log(sobrenome, bemHumorada)

// para criar váriaveis de um objeto dentro do objeto
const { endereço: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)