import React from 'react';
import styles from './Menu.module.css';
import MenuLink from '../MenuLink';

export default function Menu() {

  return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink to="/">
                Início
            </MenuLink>
            <MenuLink className={styles.Link} to="/sobremim">
                Sobre mim
            </MenuLink>
        </nav>
    </header>
  )
}
