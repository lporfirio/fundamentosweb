import React from 'react'

// utilizando parâmetros, 'props' = propriedades passados para o componentes
export default props =>
    [
        <h1 key='h1'>Bom dia, {props.nome}!</h1>,
        <h2 key='h2'>Até Breve!</h2>
    ]


// export default props =>
// <React.Fragment>

// <h1>Bom dia, {props.nome}!</h1>
// <h2>Até Breve!</h2>

// </React.Fragment>


// export default props =>
// <div>

// <h1>Bom dia, {props.nome}!</h1>
// <h2>Até Breve!</h2>

// </div>