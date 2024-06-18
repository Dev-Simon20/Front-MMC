

import "./Redirection.css";
import logob from "../../Pages/Participante/VerificacionRegistro/logob.png";
import { useNavigate,useParams } from "react-router-dom"
import { useEffect } from "react";




const Redirection=()=>{
    const slugy = useParams().slug;

    const navigate=useNavigate();

    useEffect(()=>{
        navigate(`/calendario/concurso/${slugy}`)
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

export default Redirection