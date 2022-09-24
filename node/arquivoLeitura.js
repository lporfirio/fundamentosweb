const fs = require('fs') // "filesystem" - module que já vem instalado no node

const caminho = __dirname + '/arquivo.json'

// __dirname ... constante presente em todos os arquivos do node, todos os modulos do node - representa o 'diretório atual'

// sincrono... // não é recomendado
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono..
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') // lê o arquvio JSON e já converte para objeto
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteúdo da pasta...')
    console.log(arquivos)
})