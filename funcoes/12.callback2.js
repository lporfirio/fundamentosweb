const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback
const notasBaixas = []
for (let i in notas) { // percorrer todos os elementos da array notas
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callback
// usando a função filter, dando true o elemento constará no array final:
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixas2)

// usando arrow
const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)

// outra forma de usar arrow
const notaMaiorQue7 = notaA => notaA > 7
const notasAltas = notas.filter(notaMaiorQue7)

console.log(notasAltas)