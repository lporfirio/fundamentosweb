import { useEffect, useState } from "react";
import ColecaoCliente from "../../backend/db/ColecaoCliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositiorio";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const { cliente, clientes, tabelaVisivel, exibirTabela, selecionarCliente, excluirCliente, novoCliente, salvarCliente} = useClientes()
 
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to bg-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
        <>
          <div className="flex justify-end">
            <Botao cor="green" className="mb-3"
            onClick={novoCliente}
            >Novo Cliente</Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={selecionarCliente}
            clienteExcluido={excluirCliente}>
          </Tabela>
        </>

        ): (
        <Formulario cliente={cliente}
        clienteMudou = {salvarCliente}
          cancelado={() => exibirTabela}
        />
        )}
      </Layout>
    </div>
  )
}