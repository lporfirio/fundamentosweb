// gettter e setter são funções, dentro dessas funções os valores são acessados
// útil para aplicar algum tipo de validação no atributo

const sequencia = {
    _valor: 1, // convenção para atributo privado
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }

}

console.log(sequencia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor, sequencia.valor)