import estilo from './Conteudo.module.css';
import livro from '../assets/Mundo de Sofia.jpg';

export function Conteudo() {
  return (
    <main className={estilo.container}>
      <h2 className={estilo.subtitulo}>Livro de Sofia</h2>
      <img src={livro} className={estilo.capa} alt="Capa do livro Mundo de Sofia" />
      <p className={estilo.texto}>
        O Mundo de Sofia é uma obra do filósofo norueguês Jostein Gaarder, que 
        combina ficção e filosofia
        para introduzir conceitos filosóficos de maneira acessível e envolvente. A história acompanha uma jovem
        chamada Sofia em uma jornada de descoberta sobre o pensamento humano e as grandes questões da existência.
      </p>
    </main>
  )
}


