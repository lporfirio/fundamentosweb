// PI = 3.141592
// PI * raio * raio

let raio = 10;
const PI = 3.141592;
let formulaArea = PI*raio*raio

{
//console.log(formulaArea);
console.log("area = " + formulaArea + " m²" );
}

console.log(Math.PI);
// colocar constantes em LETRAS MAIUSCULAS;
// Math.PI = valor de PI

//********/

function calcularArea(raio) {return console.log(PI * raio ** 2 )}

let calcular = raio => console.log(PI * raio ** 2)

calcular(10)
calcularArea(10)
calcularArea(32)