import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'
import React from 'react'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Ola, Mundo!
            </h1>

            <p className={styles.paragrafo}>
            Olá! Sou o Wallace, um desenvolvedor apaixonado por criar soluções inovadoras. Meu objetivo é compartilhar conhecimento e ajudar as pessoas a explorarem o potencial da tecnologia.
            </p>

        </div>

        <div className={styles.imagens}>
            <img 
                src={circuloColorido} 
                aria-hidden={true}
                className={styles.circuloColorido} 
            />

            <img 
                className={styles.minhaFoto}
                src={minhaFoto} 
                alt="Foto do Wally sorrindo" 
            />

        </div>

    </div>
  )
}
