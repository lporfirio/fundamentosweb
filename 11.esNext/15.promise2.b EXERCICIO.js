function esperarTempo(tempo = 1500) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(`esperando ${tempo} milisegundos...`)
            resolve('Deu certo!')
            reject('Deu errado!')
        }, tempo)
    })
}

esperarTempo()
    .then(resultado => esperarTempo())
    .then(resultado => esperarTempo())
    .then(resultado => esperarTempo())
    .then(resultado => console.log(resultado))
    .catch(resultado => console.log())
