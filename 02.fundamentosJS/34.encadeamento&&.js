/*Quando, num código, temos um encadeamento com &&, a checagem de toda a expressão se dará por cada parte, sendo a leitura da esquerda para a direita. Com isso em mente, é importante entender que, se nessa leitura for encontrado algo que resolve para falso, então o restante será ignorado. Isso significa que funções que estiverem depois não serão chamadas. Por exemplo:
*/

const funcao1 = () => {
    console.log('funcao 1 ok')
    return true
}
 
const funcao2 = () => {
    console.log('funcao 2 ok')
    return true
}
 
const funcao3 = () => {
    console.log('funcao 3 ok')
}
 
funcao1() && funcao2() && funcao3()
 
// saída esperada:
// funcao 1 ok
// funcao 2 ok
// funcao 3 ok

/*Perceba que nem foi especificado o retorno da função 3, pois a intenção ao fazer isso não é obter o retorno de toda a expressão. Se, por exemplo, a funcao2, no caso acima, retornasse false, a funcao3 não seria executada. Assim, usamos esse tipo de abordagem quando queremos executar uma certa função caso as checagens anteriores resolvam para true. Isso é um artifício que utilizamos, assim há menos escrita.

Algo semelhante ao que o professor fez em aula seria:*/

if(middleware){
    if(indice < middleware.length ){
        middleware[indice](ctx, () => execPasso(indice + 1))
    }
}