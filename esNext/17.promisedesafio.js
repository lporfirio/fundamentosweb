const fs = require('fs')
const path = require('path')
const os = require('os') // PARA QUANDO FOR NECESSÁRIO A QUEBRA DE LINHA...... já que '\n' só funciona no MAC 


lerArquivo = caminho => {
    return new Promise(resolve => {
        fs.readFile(caminho, (erro, conteudo) => {
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))


lerArquivo(caminho)
    .then(conteudo => conteudo.split(os.EOL)) // pode ser usado também \r\n
    .then(linhas => linhas.join(','))
    .then(conteudo => `o valor final é: ${conteudo}`)
    .then(console.log)
