import React from "react";

// se for dar nome para a função, não usar o DEFAULT.. usar const
const BoaTarde = props => <h1>Boa tarde, {props.nome}!</h1>

const BoaNoite = props => <h1>Boa noite, {props.nome}!</h1>

export default {BoaTarde, BoaNoite}