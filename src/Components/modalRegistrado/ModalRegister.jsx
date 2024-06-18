import { useEffect, useState } from 'react'
import './modalReg.css'
import { useNavigate } from 'react-router-dom';

const ModalRegister=({isOpen,closeModal,nombre_concurso})=>{

  function limpiar(cadena) {
    const sinEspacios = cadena.replace(/\s/g, "");
    const sinTildes = sinEspacios
       .normalize("NFD")
       .replace(/[\u0300-\u036f]/g, "");
    return sinTildes;
 }
    const navigate=useNavigate();
    const handleModalContainerClick = (e) => e.stopPropagation();

    // const handleNavigate=()=>{
    //     navigate(`/verificacion/${limpiar(nombre_concurso)}/${cod_con}`)
    // }
    
    return(
    <article className={`modalc ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-containerc" onClick={handleModalContainerClick}>
        {/* <button onClick={closeModal}>X</button> */}
        <section className='contenpop'>
        <i className="fa-regular fa-circle-check"></i>
            <p className='popGen'>¡Genial!</p>
            <div className='textop'><p>Hemos Registrado tu Participación. La organización se comunicará contigo en caso de que sea necesario.</p></div>
            <div className='contenpop-buttons'>
            {/* <button className='verificacionIns' onClick={handleNavigate}>Verifica tu Inscripción</button> */}
            <button id='closeN'  onClick={closeModal}>Nueva Inscripción</button>
            <a href="https://mimarinera.com/calendario-de-concursos-de-marinera-2024/" id='redirectN'>Ir al calendario</a>
            </div>
        </section>
      </div>
    </article>
    )
}

export default ModalRegister