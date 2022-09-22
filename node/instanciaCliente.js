const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova') ()
const contadorD = require('./instanciaNova') ()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor, contadorA.valor)

contadorC.inc()
contadorD.inc()
console.log(contadorD.valor, contadorC.valor)