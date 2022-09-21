/*
Os 5 Q's
1.Quais são os dados de entrada necessários?
-2 funções com 3 parâmetros. capital inicial. taxa de juros. tempo de aplicação
2.O que devo fazer com estes dados?
-2 funções para calcular
3.Quais são as restrições para o problemas
4.Qual é o resultado esperado?
5.Qual é a sequência de passos para chegar ao resultado esperado?

*/

capital_inicial = 1     // reais
taxa_de_juros = 1      // porcentagem 
tempo_de_aplicacao = 1 // anos

function jurosSimples(capital_inicial, taxa_de_juros, tempo_de_aplicacao) {
    let juros = capital_inicial * (taxa_de_juros / 100) * tempo_de_aplicacao
    let montanteDaAplicacao = juros + capital_inicial
    return console.log(montanteDaAplicacao)
}

jurosSimples(1200, 2, 14)

function jurosComposto(capital_inicial, taxa_de_juros, tempo_de_aplicacao) {
    let montante = capital_inicial * (1 + (taxa_de_juros / 100)) ** tempo_de_aplicacao
    return console.log(montante.toFixed(2))
}

jurosComposto(620, 1.5, 24)


