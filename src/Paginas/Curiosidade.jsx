import estilo from './Curiosidade.module.css';
import imagem from '../assets/Mundo de Sofia.jpg'; 

export function Curiosidade() {
  return (
    <main className={estilo.container}>
      <h1 className={estilo.titulo}>Curiosidades sobre "O Mundo de Sofia"</h1>
      <figure className={estilo.figura}>
        <img src={imagem} alt="Capa do livro O Mundo de Sofia" className={estilo.imagem} />
        <figcaption className={estilo.legenda}>Curiosidade</figcaption>
      </figure>
      <p className={estilo.texto}>
         O Mundo de Sofia (em norueguês: Sofies Verden) é um romance escrito por Jostein Gaarder, publicado em 1991. O livro foi escrito originalmente em norueguês, mas já foi traduzido para mais de 60 línguas, e teve sua primeira edição em português em 1995, que atualmente se encontra na sua 36.ª edição revista, edição publicada pela Editorial Presença (Lisboa, janeiro de 2023).  
      </p>
      <p className={estilo.texto}>
         O autor, Jostein Gaarder, escreveu o livro em apenas três meses. Sua ideia era ensinar filosofia por meio de uma história 
        que despertasse a curiosidade dos leitores sobre as grandes perguntas da humanidade.  
      </p>
      <p className={estilo.texto}>
         Em 1999, o livro foi adaptado para o cinema e posteriormente para uma série de TV norueguesa, consolidando sua importância 
        como obra educativa e cultural.  
      </p>
    </main>
  ) 
}
