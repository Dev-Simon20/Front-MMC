import { useEffect, useState  } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { helphttp } from "../../../Helpers/helphttps";
import log from "./log.webp";
import { useAuth } from "../../../context/AuthContext";
import { useSelector,useDispatch } from "react-redux";
import { addUserAdmin } from "../../../store/users/userSliceAdmin";
import { changeAuth } from "../../../store/estados/adminAuth";
import { setToken } from "../../../store/tokens/tokenAdmin";
const LoginAdmin = () => {

   const dispatch=useDispatch();

   const userAdmin=useSelector((state)=>state.userAdmin)
   const authAdmin=useSelector((state)=>state.adminAuth)
   const tokenAdmin=useSelector((state)=>state.tokenAdmin)

   const navigate=useNavigate();

   // const {user,initSessionAdmin,isautAdmin,verificacionJwtAdmin,setUser,setIsAutAdmin}=useAuth()
   const api = helphttp();
   const url_log_admin = "https://server.eventosdemarinera.com/useradmin/login";


   const [usuario, setUsuario] = useState({
      usuario: "",
      contrasena: "",
   });

const handleChange = (e) => {
      setUsuario((usuario) => ({
         ...usuario,
         [e.target.name]: e.target.value,
      }));
   };


   const send = () => {
      const initSessionAdmin = async () => {
         try {
            let opciones = {
               body: usuario,
               headers: { "content-type": "application/json" },
            };
            const consult = await api.post(url_log_admin, opciones);
            if(consult.status)throw new Error(consult.message);
            dispatch(changeAuth(true))
            const cadena=JSON.stringify(consult.token);
            dispatch(setToken(consult))
            localStorage.setItem('token',cadena);
            
         } catch (error) {
             console.log(error.message);
         }
   
      };
       initSessionAdmin();
   };

   useEffect(()=>{
      if (authAdmin.auth==true) {
          navigate('/administrador')
      }
   },[authAdmin])
   


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
            {/* <div>
            <li>{tokenAdmin.token}</li>
            </div> */}
         </div>
         <div>
         </div>
      </article>
   );
};

export default LoginAdmin;
