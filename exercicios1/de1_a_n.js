/* 
valor de i = 1
valor de n = x

verificar valor
se i for maior ou igual a x --> mostrar na tela e finalizar 
se não > i = i + 1


*/

/*var valorDeI = 1
var valorDeN = 9

function verificar() {
    if (valorDeI >= valorDeN) {
        console.log(`${valorDeI} é igual a ${valorDeN}!`)
    } else {
        valorDeI = valorDeI + 1
        console.log(`${valorDeI} ainda é diferente de ${valorDeN}`)
        verificar()
    }
}
// verificar()

/*let i = 1
function verificar2(n) {
    if (i >= n) {
        console.log(`${i} é igual a ${n}`)
    } else {
        i++
        console.log(`${i} ainda é diferente de ${n}`)
        verificar2(n)
    }
}
verificar2(5)*/

// testando while
/*
let i = 1
let n = 5
while (i < n) {
    console.log(`${i} ainda é menor do que ${n}`)
    i++
} console.log (`${i} é igual a ${n}`)*/

//testando do while
/*
let i = 1
let n = 5
do {
    console.log(`${i} é menor do que ${n}`)
    i++
} while (i < n) 
console.log(`${i} é igual a ${n}`)*/

// testando for

let i = 1
let n = 5
for (i; i < n; i++) {
    console.log(`${i} ainda é menor do que ${n}`)
}
console.log(`${i} é igual a ${n}`)