// while é focado em repetições quando você tem uma quantidade indeterminada de vezes

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return  Math.floor(valor)
    
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`opção escolhida foi ${opcao}.`)
}

console.log('até a próxima')
