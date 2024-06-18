

import "./LoaderPage.css";
import logob from "../../Pages/Participante/VerificacionRegistro/logob.png";


const LoaderPage=()=>{

    return(
        <div className="contenLoader">
            <div>
                <img src={logob} alt="" />
            </div>
             <div className="loader"></div>
        </div>
    )
}

export default LoaderPage