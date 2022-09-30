/*
var equilátero = 3 lados iguais
var isósceles = 2 lados iguais
var escaleno = lados diferentes

*/

function triangulo (lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3 ) {
    return console.log('o triangulo é Equilátero')}
    else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        return console.log('o triangulo é Isósceles')
    } else { 
        return console.log('o triangulo é Escaleno') 
    }
}

triangulo (1,2,2)
triangulo(23,3,4)
triangulo(1,2,1)
triangulo(1,1,1)
triangulo(1,1,2)