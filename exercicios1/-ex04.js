function calcular(dividendo, divisor) {
    resultado = dividendo / divisor
    resto = dividendo % divisor
    return console.log(resultado.toFixed(2), resto)
}

calcular(20, 3)