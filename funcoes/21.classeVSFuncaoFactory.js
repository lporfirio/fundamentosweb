// você pode criar objetos a partir de uma função construtora, a partir de uma classe e a partir de uma função facv


// classe é uma forma diferente de construir função no JS


class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('marcos')
p1.falar()

//*********// factory

const criarPessoa = nome => {
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('joão')
p2.falar()