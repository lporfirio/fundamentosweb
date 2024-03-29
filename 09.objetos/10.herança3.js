const pai = {
    nome: 'pedro',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai) // atribi o protótipo ao parâmetro
filha1.nome = 'ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'carla' // não dá para mudar o valor, pois o writable foi definido como falso
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)


pai.olhos = 'azuis'
console.log(`${filha1.nome} tem os olhos ${filha1.olhos}`)
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(`pertence a ela: ${key}`) : console.log(`por herança: ${key}`)
}