function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('é verdade... ' + valor)
    }
}

seForVerdadeEuFalo() // falso
seForVerdadeEuFalo(null) // falso
seForVerdadeEuFalo(undefined) // falso
seForVerdadeEuFalo(NaN) // falso
seForVerdadeEuFalo('') // falso
seForVerdadeEuFalo(0) // falso

seForVerdadeEuFalo(-1) // verdadeiro
seForVerdadeEuFalo(' ') // verdadeiro
seForVerdadeEuFalo('?') // verdadeiro
seForVerdadeEuFalo([]) //verdadeiro
seForVerdadeEuFalo([1,2]) // verdadeiro
seForVerdadeEuFalo({}) // verdeiro