// padrão de sistema de módulos ecmascript

import Pessoa from './pessoa'
import './assets'

const atendente = new Pessoa
console.log(atendente.cumprimentar())