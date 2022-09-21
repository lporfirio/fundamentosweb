console.log(soma(2, 3)) // pode chamar a function antes dela ser declarada... o JS carrega as funções declaradas antes de todo o resto do código

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const subtracao = function (x, y) {
    return x - y
}

console.log(subtracao(5, 3)) // só pode chamar depois que for declarada

// named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(5, 3)) // só pode chamar depois que for declarada



