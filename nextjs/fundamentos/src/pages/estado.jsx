import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {
    
    //const state = useState(0) 
    
    // state é um array, primeiro i é o valor, segundo é uma função que altera o valor 
    // NUNCA se altera o valor diretamente, sempre atravez dessa função

    /*
    let numero = state[0]
    let alterarNumero = state[1]
    */

    const [numero, setNumero] = useState(0)  // React Hooks
    // com operador destructuring, mais comum no react

    function incrementar() {
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}