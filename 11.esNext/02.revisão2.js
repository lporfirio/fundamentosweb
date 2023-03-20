// arrow function

const soma = (a, b) => a + b
console.log(soma(2, 3))

//se colocar o corpo na função {}, é necessário colocar o return

const sub = (a, b) => {
    return a - b
}
console.log(sub(12,2))

// arrow function (this) // função tradicional pode variar de acordo com a chamada da função, já a 'arrow function' sempre aponta para module.exports
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'node') {
    console.log(texto)
}

log()
log('sou mais forte')
log(null)
log(undefined)

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))