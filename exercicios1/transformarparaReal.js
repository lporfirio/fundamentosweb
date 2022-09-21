function formatarValorDecimal (valordecimal) {
    
    console.log(valordecimal)
    valorEmReais = `${valordecimal.toFixed(2).toString().replace(".",",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1+0.2)