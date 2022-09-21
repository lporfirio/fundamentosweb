// array em JavaScript é um objeto

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('bia', 'carlos', 'array')
console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'paulo' // forma de adicionar ou substituir elemento
aprovados.push('lucas') // forma de adicionar elemento
console.log(aprovados.length)

aprovados[9] = 'rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
console.log('')
aprovados.sort()  // ordena em ordem alfabética 
console.log(aprovados)

delete aprovados[1] // substituí o valor do índice por undefined, não excluí o índice de fato
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1, 1) // excluir ou adicionar elementos // excluir e adicionar ao mesmo tempo