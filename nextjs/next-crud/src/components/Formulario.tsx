import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada texto="Código" valor={id} somenteLeitura className="mb-3" />
            ) : false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-3"/>
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade}/>
            <div className="mt-5 flex justify-end">
                <Botao className={'bg-gradient-to-r from-blue-400 to-blue-700 px-8'} 
                    onClick={() => props.clienteMudou?.(new Cliente(nome,+idade, id))}
                >
                    {id? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}
                className={'bg-gradient-to-r from-gray-400 to-gray-700'}>
                    Cancelar
                </Botao>
            
            </div>
        </div>
    )
}