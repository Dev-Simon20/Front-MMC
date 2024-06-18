import { useNavigate } from "react-router-dom";
import logob from "../../Pages/Participante/VerificacionRegistro/logob.png";
import "./Header.css";
import { Button } from "@mui/material";



const Header = ({activ,slug}) => {
   const navigate=useNavigate();
   const origin = () => {
      navigate(`/calendario`);
   };

   const handleRegistro = () => {
      navigate(`/calendario/concurso/${slug}/registro`);
   };
   const handleVerificacion = () => {
      navigate(`/calendario/concurso/${slug}/verificacion`);
   };
   const inciciarSession = () => {
      window.open('https://adminm.eventosdemarinera.com/', "_blank");
   }; 
   const whats = () => {
      window.open("https://wa.me/954109568", "_blank");
   };


   return (
      <div className="contenheader">
         <div className="contenHeaderHeader">
         <img className="logoheader" onClick={origin} src={logob} alt="" />
         
         <div className="linkheader">
            {activ &&<p className="ps" onClick={handleRegistro}>Registro</p>}
            {activ&&<p className="ps" onClick={handleVerificacion}>Verifica tu inscripción </p>}
            {!activ&&<div id="ingresarButton" onClick={whats} ><p>Registrar evento</p></div>}
            {!activ&&<div id="registrarButton"onClick={inciciarSession} ><p>Ingresar</p></div>}


         </div>
         </div>
      </div>
   );
};

export default Header;
