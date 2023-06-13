import PostModelo from 'componentes/PostModelo'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Ola, eu sou o Wally
      </h3>
      <img 
        src={fotoSobreMim} 
        alt="Foto do wallace sorrindo"
        className={styles.fotoSobreMim} 
      />
      <p className={styles.paragrafo}>
      Olá! Meu nome é Wallace Caetano, tenho 27 anos e sou um desenvolvedor junior com uma paixão por tecnologia e música. Atualmente, estou mergulhado no mundo da programação, buscando constantemente novos desafios e oportunidades para expandir minhas habilidades. Além disso, estou cursando Banco de Dados, buscando aprofundar meu conhecimento nessa área fundamental para o desenvolvimento de soluções tecnológicas.
      </p>
      <p className={styles.paragrafo}>
        A  programação é uma verdadeira paixão para mim, e adoro enfrentar problemas complexos e criar soluções inovadoras. Ao mesmo tempo, a música é uma parte essencial da minha vida. Quando não estou codificando, dedico meu tempo a tocar guitarra, mergulhando em ritmos e melodias que me transportam para outro mundo.
      </p>
      <p className={styles.paragrafo}>
      Como desenvolvedor junior, estou empolgado em aprender e crescer na minha carreira. Através do curso de Banco de Dados, estou adquirindo conhecimentos fundamentais para construir sistemas eficientes e seguros. Tenho a mente aberta para novas oportunidades e estou ansioso para enfrentar os desafios que surgirem no caminho.
      </p>
      <p className={styles.paragrafo}>
      Estou empolgado em compartilhar meu entusiasmo pela tecnologia e meu amor pela música com o mundo. Seja desenvolvendo soluções inovadoras ou criando melodias envolventes, estou determinado a deixar minha marca. Vamos embarcar nessa jornada juntos?
      </p>
    </PostModelo>
  )
}
