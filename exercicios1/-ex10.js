/*
numin = número inteiro
se numin % 3 != 0

*/

function verificar(numin) {
    resto = numin % 3
    if (resto != 0) {
        return console.log('false')
    } else {
        return console.log('true')
    }

}

verificar(9)


//---------------

function verificarNumero(numero) {
    if(numero % 3 == 0){
        return true
    } else {
        return false
    }
}

console.log(verificarNumero(30))

console.log(verificarNumero(145))