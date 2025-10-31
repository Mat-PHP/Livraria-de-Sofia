import estilo from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';



export function BarraNavegacao(){
    return(
        <nav className={estilo.barraNavegacao}>
            <ul>
                <Link to= '/'><li>Meu Livro</li></Link>
                <Link to= 'autor'><li>Autor</li></Link>
                <Link to= 'curiosidade'><li>Curiosidade</li></Link>

            
            </ul>
        </nav>
    )

}