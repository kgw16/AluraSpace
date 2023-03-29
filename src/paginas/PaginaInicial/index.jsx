import styles from './PaginaInicial.module.scss';
import Banner from "../../componentes/Banner/Banner";

import Cabecalho from "componentes/Cabecalho/index";
import Menu from "componentes/Menu";
import Rodape from "componentes/Rodape";
import Galeria from "componentes/Galeria";
import Populares from "componentes/Populares";

export default function PaginaInicial() {
    return(
        <>
        <Cabecalho/>
        <main>
            <section className={styles.principal}>
                <Menu />
                <Banner classNome={styles.principal__imagem}/>
            </section>
            <div className={styles.galeria}>
                <Galeria />
                <Populares/>
            </div>
        </main>
        <Rodape />
        </>
    )
}