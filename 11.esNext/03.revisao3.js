// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // valores
console.log(Object.entries(obj)) // gera chave, valor

// Melhorias na Notação Literal
const nome = 'carla'
const pessoa = {
    nome,
    ola() {
        return 'oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {
    dna = true
}
class Cachorro extends Animal {
    falar() {
        return 'au au!'
    }
}

console.log(new Cachorro().falar())
console.log(new Cachorro().dna)

spike = new Cachorro
console.log(spike.falar())