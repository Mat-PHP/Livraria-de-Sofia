import { Route, Routes } from 'react-router-dom';
import { Inicial } from '../Paginas/inicial';
import { Autor} from  '../Paginas/Autor';
import { Curiosidade } from "../Paginas/Curiosidade";
import { Conteudo} from '../Componentes/Conteudo';


export function Rotas(){
    return(
        <Routes>
            <Route path='/' element= {<Inicial/>}>
            <Route index element={<Conteudo/>}/>
            <Route path='curiosidade' element={<Curiosidade/>}/>
             <Route path='autor' element={<Autor/>}/>
            

            
            </Route>

        </Routes>

    )
}