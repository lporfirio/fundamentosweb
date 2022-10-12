Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResutado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('quadro de honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('reprovado')
    } else {
        console.log('nota inválida')
    }
}

imprimirResutado(10)
imprimirResutado(8)
imprimirResutado(6.5)
imprimirResutado(2)
imprimirResutado(11)
