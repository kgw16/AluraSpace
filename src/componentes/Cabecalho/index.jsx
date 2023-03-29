import logo from './logo.png';
import seach from './search.png'
import styles from './Cabecalho.module.scss'

export default function Cabecalho() {
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo da Alura Space"/>
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type='text' placeholder="O que voçe procura"/>
                <img src={seach} alt="Icone de Lupa"/>
            </div>
        </header>
    )
}