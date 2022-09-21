function Pessoa(nome) {
    this.nomeDaPessoa = nome


    this.falar = function() {
        console.log(`meu nome é ${this.nomeDaPessoa}`)
    }
}


const p1 = new Pessoa('marcos')
p1.falar()

const p2 = new Pessoa ('pedro')
p2.falar()