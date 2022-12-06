const pilotos = ['vettel', 'alonso', 'raikkonen', 'massa']
console.log(pilotos)

pilotos.pop() // massa quebrou o carro! --- remove o último elemento da array
console.log(pilotos)

pilotos.push('verstappen') // -- adiciona um novo elemento no final da array 
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da array
console.log(pilotos)

pilotos.unshift('hamilton') // adiciona elemento no começo da array
console.log(pilotos)


//-------------------------------------------------------

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'botas', 'massa')
console.log(pilotos)

//remover

pilotos.splice(3, 1) 
console.log(pilotos)

//------------------

const algunsPilotos1 = pilotos.slice(2) // gera um novo array apartir do índice indicado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // gera um novo array, último elemento não é incluído