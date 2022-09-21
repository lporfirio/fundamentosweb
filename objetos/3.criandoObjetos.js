// usando a notação literal

const obj1 = {}
console.log(obj1)

// object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 6, 0.15)
console.log(p1.getPrecoComDesconto())
const p2 = new Produto('notebook', 4000, 0.15)
console.log(p2.getPrecoComDesconto())


// função factory
function criarFuncionario(nome, salariobase, faltas) {
    return {
        nome,
        salariobase,
        faltas,
        getSalario() {
            return (salariobase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('pedro', 4000, 4)
console.log(f1.getSalario())
const f2 = criarFuncionario('rebeca', 5600, 2)
console.log(f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

// uma função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)