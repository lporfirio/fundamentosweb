require('./global')

console.log(global.MinhaApp.saudacao())

MinhaApp.nome = 'eita'
console.log(MinhaApp.nome) /// como o object original está com FREEZE, não podemos mexer nos elementos