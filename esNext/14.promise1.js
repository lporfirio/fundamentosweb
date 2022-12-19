// uma promessa vai gerar somente UM único valor!



primeiroElemento = arrayOuString => arrayOuString[0]
letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function (cumprirPromessa) {                        // cumprirPromessa geralmente é chamado de
    cumprirPromessa(['Ana', 'Thales', 'Lucas', 'Jimmy'])
})
p
    .then(primeiroElemento)                        // o resultado de um MÉTODO THEN é passado para o próximo MÉTODO THEN //// then SEMPRE recebe somente um ÚNICO parâmetro
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)