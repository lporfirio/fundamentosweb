let dobro = function (a) {
    return 2 * a
}


// função arrow
// sempre anônima, para ser chamada precisa estar em uma variável
dobro = (a) => {
    return 2 * a
}

// forma mais reduzida
// quando a função tem apenas uma linha
// se for somente 1 parâmetro, pode tirar os ()
// sem corpo {}, o retorno é explícito
dobro = a => 2 * a
console.log((dobro(Math.PI).toFixed(2)))

let ola = function () {
    return 'olá'
}

// parâmetro vazio
ola = () => 'olá'

// opção mais curta, possui 1 parâmetro vazio 
ola = _ => 'olá'
console.log(ola())



//***************************************** */
metade = (b) => { return b / 2}
metade = (b) => b/2
console.log(metade(30))

delta = (a, b, c) => {
    return b ** 2 - 4 * a * c
}

console.log(delta(2, 5, 2))

subtracao = (a,b) => {
    return a - b
}
subtracao = (a,b) => a-b
console.log(subtracao(40,10))

//*************//
const metade2 = x => x / 2
console.log(metade2(20))

