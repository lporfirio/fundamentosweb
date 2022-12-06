const alunos = [
    { nome: 'joão', nota: 7.3, bolsista: false },
    { nome: 'maria', nota: 9.2, bolsista: true },
    { nome: 'pedro', nota: 9.8, bolsista: false },
    { nome: 'ana', nota: 8.7, bolsista: true }

]

// todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const resultado = alunos.map(a => a.bolsista)
console.log(resultado.reduce(todosBolsistas))
console.log(resultado)



// algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
const resutado = alunos.map(a => a.bolsista)
if (resultado.reduce(algumBolsista) == true) { console.log('Existe ao menos um aluno bolsista') }