// operador... rest(juntar)/spread(espalhar)

// usar rest como parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'maria', salario: 12348.99}
const clone = { ativo: true, ...funcionario}

console.log(clone)

// usar spread com array
const grupoA = [ 'joão','pedro','flora']
const grupoFinal = ['maria', 'marcos', ...grupoA, 'rafaela']

console.log(grupoFinal)