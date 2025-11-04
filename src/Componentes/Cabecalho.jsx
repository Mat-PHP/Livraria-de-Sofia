import estilo from './Cabecalho.module.css';
import livro from '../assets/Mundo de Sofia.jpg';

export function Cabecalho() {
    return (
        <main>
            <h1 className={estilo.livro}>Livro</h1>
            
           
            <img src={livro} className={estilo.jpg} />
            
            <p>
                Essa é a capa do Mundo de Sofia.
            </p>
        </main>
    )
}
