function verificarNota(nota) {
    notaCorrigida = arredondar(nota)
    if (nota <= 40) {
        return console.log(`nota:${nota} [REPROVADO]`)
    } else if (nota => 41) {
        return console.log(`nota:${notaCorrigida} [APROVADO]`)
    }
}



function arredondar(nota) {
    if (nota % 5 > 2) {
        return nota = nota + (5-(nota % 5))}
    else {
        return nota
    }
}

console.log(arredondar(43))
verificarNota(58)