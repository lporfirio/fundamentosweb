// quando é preciso colocar uma callback dentro da outra.

// setTimeout(function() {
//     console.log('executando callback...')
    
//     setTimeout(function() {
//         console.log('executando callback...')
        
//         setTimeout(function() {
//             console.log('executando callback...')

//         }, 2000)
//     }, 2000)
// }, 2000)

// tempo padrão do JS pe em milisegundos


// usando promise


function esperarPor(tempo = 2000 ) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            console.log('executando promise...')
            resolve()
        }, tempo)
    }) 
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)
