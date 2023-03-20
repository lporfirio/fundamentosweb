const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', {framework: true})


console.log(tecnologias)
console.log(tecnologias.get('react').framework) // get é a forma de pegar informações do Map...

//=========================

const chavesVariadas = new Map([
    [function () { }, 'função'],
    [{}, 'objeto'],
    [123, 'numero'],
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)