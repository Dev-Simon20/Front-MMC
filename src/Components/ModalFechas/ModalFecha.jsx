//Logica del Modal
/**
 * 1-EL article se abrira en toda la pantalla
 */
import './mod.css'
const ModalFecha=({children,isOpen,closeModal})=>{
    const handleModalContainerClick = (e) => e.stopPropagation();
    return(
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
            {children}
      </div>
    </article>
    )
}

export default ModalFecha