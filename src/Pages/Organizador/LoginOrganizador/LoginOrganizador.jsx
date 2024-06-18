import { useEffect, useState  } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { helphttp } from "../../../Helpers/helphttps";
import "./LoginOrg.css";
import log from "./log.webp";
import { useAuth } from "../../../context/AuthContext";
import { useSelector,useDispatch } from "react-redux";
import { changeAuthOrg } from "../../../store/estados/orgaAuth";
import { addUserOrg } from "../../../store/users/userSliceOrg";

const LoginOrganizador = () => {

   const dispatch=useDispatch();
   const api = helphttp();
   const url_log = "https://server.eventosdemarinera.com/userorg/loginOrganizador";

   const navigate=useNavigate();
   const [usuario, setUsuario] = useState({
      usuario: "",
      contrasena: "",
   });
   const {initSession,user,isAutenticado}=useAuth()
   const orgaAuth=useSelector((state)=>state.orgaAuth);
   const userOrg=useSelector((state)=>state.userOrg);

   const handleChange = (e) => {
      setUsuario((usuario) => ({
         ...usuario,
         [e.target.name]: e.target.value,
      }));
   };
   const send = () => {
      const initSessionOrga = async () => {
         try {
            let opciones = {
               body: usuario,
               headers: { "content-type": "application/json" },
            };
            const consult = await api.post(url_log, opciones);
            if(consult.status)throw new Error(consult.message);
            dispatch(addUserOrg(consult))
            dispatch(changeAuthOrg(true))
            const cadena=JSON.stringify(consult.token);
            localStorage.setItem('token',cadena);            
         } catch (error) {
             console.log(error.message);
         }
   
      };
       initSessionOrga();
   };
   useEffect(()=>{
      if (orgaAuth.auth==true) {
        navigate(`/HomeOrganizacion/${userOrg.cod_organizador}`)   
      }
    },[orgaAuth])
   return (
      <article className="conten-login">
         <div className="conten-log">
            <section className="log-img">
               <img src={log} alt="" />
            </section>
            <section className="log-inputs">
               <h2>Inicio de Session</h2>
               <div>
                  <label>Ingrese su usuario</label>
                  <input type="text" name="usuario" onChange={handleChange} />
                  <label htmlFor="">Ingrese su contraseña</label>
                  <input
                     type="password"
                     name="contrasena"
                     onChange={handleChange}
                  />
               </div>
               <button onClick={send}>Iniciar Sesión</button>
            </section>
         </div>
      </article>
   );
};

export default LoginOrganizador;
