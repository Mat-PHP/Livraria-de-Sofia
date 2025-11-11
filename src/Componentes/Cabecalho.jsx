import estilo from './Cabecalho.module.css';
import livro from '../assets/Mundo de Sofia.jpg';

export function Cabecalho() {
    return (
        <header className={estilo.cabecalho}>
            <img src={livro} className={estilo.logo} />
            <h1 className={estilo.titulo}>Mundo de Sofia</h1>
        </header>
    )
}
