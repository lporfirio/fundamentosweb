let a = 7;
let b = 94;

// depois da troca a = 94 e b = 7

a = b;
b = a - 87;
console.log(a);
console.log(b);

// outra solução

a = 7;
b = 94;

let temp = a
a = b
b = temp

console.log(a)
console.log(b)
console.log(" ")
console.log(temp)

console.log(" ")
console.log(a)
console.log(b)
console.log(" ")
console.log(temp)

/// outra solução
console.log("..................");
a = 7;
b = 94;

[a, b] = [b, a]
console.log(a);
console.log(b);



