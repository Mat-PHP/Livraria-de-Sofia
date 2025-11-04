import autorImg from "../assets/autor.jpg";
import estilo from '../Paginas/Autor.module.css'



export function Autor(){
    return(
        <main>
            <h1 className={estilo.autor}>Autor  </h1>
            <img src={autorImg} className={estilo.autorImg} />

        
            <p>
                O autor de "O Mundo de Sofia" é 
                o filósofo e escritor norueguês Jostein Gaarder.
                 Gaarder nasceu em 1952 e se tornou mundialmente famoso com este livro, 
                 publicado em 1991, que apresenta a história da filosofia ocidental de forma acessível para jovens e adultos. 
                 Ele era professor de filosofia antes de se dedicar integralmente à escrita. 
            </p>


        </main>
    )
    
}