import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro' // nome do componente sempre tem que ser em minúscula

import BomDia from './componentes/BomDia'

import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'






ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passo os componentes Filhos aqui? */}
            <Filho nome="Pedro"  />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai> 
    </div>
, document.getElementById('root'))