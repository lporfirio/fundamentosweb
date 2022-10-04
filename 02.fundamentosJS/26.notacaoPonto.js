console.log(typeof console) // console é um objeto




// notação ponto usado para acessar uma função dentro de um objeto
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola'  // usando '.' para criar novo atributo no objeto

function Obj(nome) {
    this.nome = nome // this = ao nome associado ao objeto criado a partir dessa função
    this.exec = function() {
        console.log('exec...')
    }
}

const obj2 = new Obj('cadeira')
console.log(obj2)

const obj3 = new Obj('mesa')
console.log(obj3.exec)
obj3.exec()