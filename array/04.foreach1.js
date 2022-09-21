// forEach percorre todo o array

const aprovados = ['agatha','aldo','daniel','raquel']

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice+1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome)) 

console.log('')
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

/*
primeiro parametro é sempre o conteúdo do elemento
segundo parametro é sempre o índice
terceiro parametro é sempre o array
*/ 
