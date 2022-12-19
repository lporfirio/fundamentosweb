function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }


    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}


gerarNumerosEntre(1, 60)
    .then(numero => numero * 10)
    .then(numerox10 => `o número gerado foi ${numerox10}`)
    .then(console.log)





