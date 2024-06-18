import { useEffect } from "react";
import "./modalCat.css";

const ModalCategorias = ({setVerCat,categorias}) => {

   const handleModalContainerClick = (e) => e.stopPropagation();
   categorias.sort((a, b) => b.año_min - a.año_min);
   return (
      <article
         className={"modalcat"}
         onClick={()=>setVerCat(false)}
      >
         <div className="modal-containercat" onClick={handleModalContainerClick} >
            <div className="rowcat titcat">
                <p style={{color: '#492558'}}>Categoría</p>
                <section>
                    <div style={{color: '#492558'}}>Desde</div>
                    <div style={{color: '#492558'}}>Hasta</div>
                </section>
            </div>
            {categorias&&categorias.map((cat,i)=>{
            return <div key={i} className="rowcat">
                <p>{cat.nombre_cat}</p>
                <section>
                    <div>{cat.año_min==0?'----':cat.año_min}</div>
                    <div>{cat.año_max==0?'----':cat.año_max}</div>
                </section>
            </div>
            })}
             <button onClick={()=>setVerCat(false)} className="butMc">Cerrar</button>

           
         </div>
      </article>
    //   año_max

    //   año_min
    //   cod_c_c
    //   cod_categoria
    //   nombre_cat
   );
};

export default ModalCategorias;
