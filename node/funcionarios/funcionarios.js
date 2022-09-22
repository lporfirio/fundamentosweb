const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    

    var func = funcionarios.filter(chines).filter(mulher).reduce(menorSalario)
    console.log(func)
})



function chines(p) {
    if (p.pais === 'China') 
    return true
}
function mulher(p) {
   if ( p.genero === 'F') 
    return true
}
function menorSalario(func, funcAtual) {
    return func.salario < funcAtual.salario ? func : funcAtual
}



