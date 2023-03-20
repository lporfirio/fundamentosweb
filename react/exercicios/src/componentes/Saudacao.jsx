import React, { Component } from "react";

// componente de Classe
export default class Saudacao extends Component {

    //state pode ser alterado, o props não
    
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome    }

    constructor(props) {
        super(props)

        this.setTipo = this.setTipo.bind(this)
    }
    // função responsável por alterar o estado
    setTipo(e) {
        this.setState({ tipo: e.target.value})
    }

    setNome(e) {
        this.setState({ nome: e.target.value})
    }

    render() {
        const { tipo, nome} = this.state
        return (
            <div>
                <h1>{tipo}, {nome}!</h1>
                <hr />
                <input type="ext" placeholder="Tipo..." value={tipo}
                onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." value={nome} 
                onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}