var numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // let tem escopo dentro do bloco apenas... se não houver o let dentro do bloco ele procura fora(global)
}

console.log('fora =', numero)