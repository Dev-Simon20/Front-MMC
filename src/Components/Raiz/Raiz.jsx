

import "./Raiz.css";
import logob from "../../Pages/Participante/VerificacionRegistro/logob.png";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";



const Raiz=()=>{

    const navigate=useNavigate();

    useEffect(()=>{
        navigate('/calendario')
    },[])


    return(
        <div className="contenLoader">
            <div>
                <img src={logob} alt="" />
            </div>
             <div className="loader"></div>
        </div>
    )
}

export default Raiz