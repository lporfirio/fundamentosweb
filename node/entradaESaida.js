const anonimo = process.argv.indexOf('-a') !==-1
const os = require('os')
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('fala anônimo!${os.EOL}')
    process.exit()
} else {
    process.stdout.write('informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('${os.EOL}', '')

        process.stdout.write(`fala ${nome}${os.EOL}` )
        process.exit()
    })
}