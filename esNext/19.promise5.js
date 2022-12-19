function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('testando', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`ERRO esp: ${err}`)
    )
    .then(() => console.log('fim!'))
    .catch(err => console.log(`ERRO Geral: ${err}`) )            // forma de tratar erro.. 'método catch' // colocar no final do fluxo