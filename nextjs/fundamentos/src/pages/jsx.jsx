import styles from "../styles/Estiloso.module.css"
import Layout from "../components/Layout"


export default function Jsx() {
    const a = 4
    const b = 3
    console.log(a * b)

    const obj = { nome: 'João', idade: 25 }

    const titulo2 = <h1>JSX é um conceito central 2</h1>

    function subtitulo() {
        return <h2>{" muito legal".toUpperCase()}</h2>
    }

    return (
        <div className={styles.roxo}>
            <Layout titulo="Entendendo o JSX">
                <h1>JSX é um conceito central</h1>
                {subtitulo()}
                <p>
                    {JSON.stringify(obj)}
                </p>

                {titulo2}
            </Layout>
        </div>
    )
}