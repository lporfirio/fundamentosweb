// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'outra string'
}

const aluno = 'gui'
const situação = 'aprovado'
console.log(tag `${aluno} está ${situação} novamente`)