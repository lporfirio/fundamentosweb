const nome = 'rebeca'
const concatenacao = 'olá ' + nome + '!'

const template = `  
    olá 
    ${nome}!`

console.log(concatenacao, template)

// expressoes... funções, etc
console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase()

console.log(`ei... ${up('cuidado, parça')}!!!`)