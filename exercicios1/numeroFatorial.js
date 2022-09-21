numero = -1

function calcular(numero) {
    if (numero <= 0) {console.log('o número precisa ser maior que 0')}
    else {
        fatorial = 1
        while (numero !== 1) {
            fatorial = fatorial * numero
            numero--
        } console.log(fatorial)
    } 
}

calcular(0)