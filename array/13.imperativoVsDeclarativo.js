const alunos = [
    {nome:'joão', nota: 7.9},
    {nome:'maria', nota: 9.2}
]
// conseguir a média das notas dos alunos

// imperativo

let total1 = 0
for (let i = 0;i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
let total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)