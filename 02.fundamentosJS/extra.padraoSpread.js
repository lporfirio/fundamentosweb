/* 
O padrão "spread" é uma operação que permite que você desfaça uma estrutura em suas partes individualmente. Ele é representado por três pontos ( ... ).

No JavaScript, o padrão "spread" é amplamente utilizado para trabalhar com arrays, objetos e até mesmo para chamar funções.

Por exemplo, se você tiver um array A e desejar criar outro array B com todos os elementos de A e mais alguns elementos, você pode usar o padrão "spread" da seguinte maneira: 
*/

const A = [1, 2, 3]
const B = [...A, 4, 5, 6]
console.log(B) // [1, 2, 3, 4, 5, 6]


// Você também pode usar o padrão "spread" para copiar objetos:

const objA = { a: 1, b: 2, c: 3 }
const objB = { ...objA }
console.log(objB) // { a: 1, b: 2, c: 3 }


// E para chamar funções, você pode usar o padrão "spread" para passar vários argumentos como se fossem passados individualmente: 

function soma(a, b, c) {
    return a + b + c
  }
  const numeros = [1, 2, 3]
  console.log(soma(...numeros)) // 6


// Além disso, o padrão "spread" também é útil para combinar arrays ou objetos:

const F = [1, 2, 3]
const G = [4, 5, 6]
const H = [...F, ...G]
console.log(H) // [1, 2, 3, 4, 5, 6]
