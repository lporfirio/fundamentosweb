const imprimirResutado = function(nota) {
    if(nota >= 7) {
        console.log('aprovado')
    } else {
        console.log('reprovado')
    }
}

imprimirResutado(10)
imprimirResutado(4)
imprimirResutado('epa!') // cuidado!!!!