import Cabecalho from "../components/Cabecalho";
import Jsx from "./jsx";
import Layout from "../components/Layout"
import styles from '../styles/Estiloso.module.css'

export default function Exemplo() {
    return (
    <div className={styles.roxo}>
        <Layout titulo="Usando Componentes">

            <Cabecalho titulo="Next.js e React" />
            <Cabecalho titulo="aprendendo next na prática" />
        </Layout>

    </div>
            )
}