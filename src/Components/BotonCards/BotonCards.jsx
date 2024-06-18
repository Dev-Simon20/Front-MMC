import { useNavigate } from 'react-router-dom'
import './botoncards.css'


const nombreEvento = (tipo) => {
  switch (tipo) {
     case 1:
        return "celebraciones";
     case 2:
        return "concurso";
     case 3:
        return "coronación-de-reinas";
     case 4:
        return "ensayo-con-banda";
     case 5:
        return "solidario";
     default:
        break;
  }
};

const BotonCards=({evento})=>{


  const navigate=useNavigate();

 const navegar=()=>{
        navigate(`/calendario/${nombreEvento(evento.tipos_evento_cod_tipo)}/${evento.slug}`);
  }

    return(<div className='botoncards' onClick={navegar} >
       <button  className='Vd'>Ver Detalles</button>
     </div>)
}

export default BotonCards