function teste1(num) {
    if (num > 7)
        console.log(num)

    console.log('final')
}

teste1(6)
console.log('')
teste1(8)

function teste2(num) {        //// evitar ponto e vírgula nas estruturas de controle;;;
    if (num > 7); 
    
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)