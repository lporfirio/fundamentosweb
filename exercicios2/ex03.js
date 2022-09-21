// desenvolva uma função que recebe dois parâmetros, a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$X" em que X é o quanto o funcionário ganhou no mês.


function calcular(horas, salarioPorHora) {
    let salarioNoMes = horas * salarioPorHora
    return console.log(`Salário igual a R$${salarioNoMes.toFixed(2)}`)}

calcular(160, 35)
