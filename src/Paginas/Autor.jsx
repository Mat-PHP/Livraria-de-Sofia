import estilo from './Autor.module.css';
import escritor from '../assets/Autor.jpg'; // sua imagem

export function Autor() {
  return (
    <main className={estilo.container}>
      <h1 className={estilo.titulo}>Autor de mundo de Sofia</h1>
      <figure className={estilo.figura}>
        <img src={escritor} alt="Arthur Conan Doyle" className={estilo.imagem} />
        <figcaption className={estilo.legenda}>Autor de mundo de Sofia</figcaption>
      </figure>
      <p className={estilo.texto}>
        Sir Arthur Conan Doyle vem sendo uma figura na história da literatura policial ao criar Sherlock Holmes,
        seu maior personagem, conhecido mundialmente como um ícone do raciocínio lógico e da investigação.
        Doyle deu vida ao detetive em uma série de contos e romances que se tornaram clássicos. Além disso, Doyle
        era um homem de múltiplos interesses e um defensor da justiça em várias causas.
      </p>
    </main>
  );
}




