var salarioMensal = 0
var horasTrabalhadas = 0 
var salarioPorHora =  0

function calcular(salarioMensal, horasTrabalhadas) {
    salarioPorHora = salarioMensal / horasTrabalhadas
    return console.log(`o Salário por hora é ${salarioPorHora}`)
}

calcular(2000, 160)