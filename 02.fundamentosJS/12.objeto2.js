console.log(typeof Object) // function
console.log(typeof new Object) // object, pois cria novo objeto

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente) // object, pois cria novo objeto

class Produto {} // class na verdade é uma função
console.log(typeof Produto)
console.log(typeof new Produto)