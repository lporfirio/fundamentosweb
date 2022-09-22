const moduloA = require('../../01_moduloA')
console.log(moduloA.ola)

const c = require('./pastaC')
console.log(c.ola2)

const saudacao = require('saudacao')
console.log(saudacao.ola)


/*
const http = require('http')
http.createServer((req, res) => {
    res.write('bom dia!')
    res.end()
}).listen(8080)
*/