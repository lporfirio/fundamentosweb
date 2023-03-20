import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Inicio() {
    return ( // utilizar parentêses para colocar trechos maiores de código
        <div style={{
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh',

        }}>
            <Navegador destino="/estiloso" texto="Estiloso" cor="rgb(56, 47, 56)"/>
            <Navegador destino="/exemplo" texto="Exemplo" cor="rgb(56, 47, 56)"/>
            <Navegador destino="/jsx" texto="Jsx" cor="rgb(56, 47, 56)"/>
            <Navegador texto="Navegação #01" destino="/navegacao"></Navegador>
            <Navegador texto="Navegação #02" destino="/cliente/sp/123" cor="crimson"></Navegador>
            <Navegador texto="Componente com Estado" destino="/estado" cor="rgb(56, 47, 56)"></Navegador>
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="rgb(56, 47, 56)"></Navegador>
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="rgb(56, 47, 56)"></Navegador>

        </div>
    )
}

