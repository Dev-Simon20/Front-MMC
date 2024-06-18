import { useState } from 'react'
import './TabInscripciones.css'
import RegistroPar from '../../../RegistroParticipante/RegistroParticipante';
import VerificacionRegistro from '../../../VerificacionRegistro/VerificacionRegistro';
import FormasPago from '../../FormasPago/FormasPago';


const TabInscripciones=({slugy,cod_concurso})=>{

    const [posicion,setPosicion]=useState(1);


    return (<div className='conainerContRegistro'>
        <article className='cotainerRegistro'>
            <section style={{backgroundColor:`${posicion==1?'#e7294f':'#bdbdbd'}`}} onClick={()=>setPosicion(1)}><p>1. Precios y formas de Pago</p></section>
            <section style={{backgroundColor:`${posicion==2?'#e7294f':'#bdbdbd'}`}} onClick={()=>setPosicion(2)}><p>2. Registra tu incripción</p></section>
            <section style={{backgroundColor:`${posicion==3?'#e7294f':'#bdbdbd'}`}} onClick={()=>setPosicion(3)}><p>3. Verifica tu Inscripción</p></section>
        </article>
        <div className='bodyContenRegistro'>
            {posicion==1&&<FormasPago slugy={slugy}/>}
            {posicion==2&&<RegistroPar slugy={slugy}/>}
            {posicion==3&&<VerificacionRegistro cod_concurso={cod_concurso}/>}
            
        </div>
    </div>)
}

export default TabInscripciones