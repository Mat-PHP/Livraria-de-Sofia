import estilo from './Cabecalho.module.css';
import livro from '../assets/Mundo de Sofia.jpg';

export function Couteudo() {
    return (
        <main className={estilo.container}>
            
            <h1 className={estilo.titulo}>Mundo de Sofia</h1>

            <img src={livro} className={estilo.capa} alt="Capa do livro Mundo de Sofia" />

        </main>
    );
}
