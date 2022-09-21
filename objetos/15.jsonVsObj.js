/* O formato JSON (JavaScript Object Notation) é um formato aberto usado como alternativa ao XML para a transferência de dados estruturados entre um servidor de Web e uma aplicação Web

é um formato compacto, de padrão aberto independente, de troca de dados simples e rápida entre sistemas
*/

const obj = {
    a: 1, b: 2, c: 3, soma() { return a + b + c }
}

console.log(JSON.stringify(obj))

// passar JSON para objeto

console.log(JSON.parse('{ "a":1, "b":2, "c":3}'))
console.log(JSON.parse('{"a":1.7,"strings":"string","booleans":true,"objetos":{}, "arrays": []}'))