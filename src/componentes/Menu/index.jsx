import React from 'react'
import Home from '../../assets/home-ativo.png'
import MaisCurtidas from '../../assets/mais-curtidas-inativo.png'
import MaisVistas from '../../assets/mais-vistas-inativo.png'
import Novas from '../../assets/novas-inativo.png'
import SurpreendaMe from '../../assets/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={Home} alt=''/>
                <a href='https://twitter.com/aluraonline?lang=en'>Início</a>
            </li>
            <li className={styles.menu__item}>
                <img src={MaisCurtidas} alt=''/>
                <a href='https://twitter.com/aluraonline?lang=en'>Mais Curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={MaisVistas} alt=''/>
                <a href='https://twitter.com/aluraonline?lang=en'>Mais Vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={Novas} alt=''/>
                <a href='https://twitter.com/aluraonline?lang=en'>Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={SurpreendaMe} alt=''/>
                <a href='https://twitter.com/aluraonline?lang=en'>Surpreenda</a>
            </li>
        </ul>
    </nav>
  )
}
