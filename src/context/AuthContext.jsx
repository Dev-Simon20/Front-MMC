import { createContext, useState, useContext, useEffect } from "react";
import { helphttp } from "../Helpers/helphttps";
import Cookies from "../Cookies"
import { setYear } from "date-fns";
import { useNavigate } from "react-router-dom";
const url_log = "https://server.eventosdemarinera.com/userorg/loginOrganizador";
const url_verify="https://server.eventosdemarinera.com/shared/verificarToken";
const url_log_admin='https://server.eventosdemarinera.com/useradmin/login';
// https://server.eventosdemarinera.com/useradmin/login
const AuthContext = createContext();

export const useAuth = () => {
   const context = useContext(AuthContext);
   if (!context) {
      throw new Error("useAuth debe de estar dentro de un provider");
   }
   return context;
};

export const AuthProvider = ({ children }) => {
   const api = helphttp();
   const [user, setUser] = useState(null);
   const [isAutenticado, setIsAutenticado] = useState(false);
   const [isautAdmin,setIsAutAdmin]=useState(false)


   const initSession = async (usuario) => {
      try {
         let opciones = {
            body: usuario,
            headers: { "content-type": "application/json" },
         };
         const consult = await api.post(url_log, opciones);
         console.log(consult);
         if(consult.status)throw new Error(consult.message)
         setUser(consult);
         setIsAutenticado(true)
      } catch (error) {
          console.log(error.message);
          setUser(null);
          setIsAutenticado(false)
      }

   };

   const initSessionAdmin = async (usuario) => {
      try {
    
         let opciones = {
            body: usuario,
            headers: { "content-type": "application/json" },
         };
         const consult = await api.post(url_log_admin, opciones);
         if(consult.status)throw new Error(consult.message);
         console.log(Cookies.get());
         setUser(consult);
         setIsAutAdmin(true)
      } catch (error) {
          console.log(error.message);
          setUser(null);
          setIsAutAdmin(false)
      }

   };



   const verificacionJwt = async () => {
   // iniciando la verificacion del token
   //    const cookies =Cookies.get();
   //   if(!cookies.token){
   //    setIsAutenticado(false),
   //    setUser(null)
   //    return
   //  }
   //    try {
   //        const data = await api.get(url_verify);
   //        if (data.status){
   //          setIsAutenticado(false);
   //          throw new Error(data.message||'No vino el mensaje de error');
   //        }
   //        setIsAutenticado(true);
   //        setUser(data);
   //      } catch (error) {
   //        setIsAutenticado(false);
   //        setUser(null);
   //        console.log(error.message);
   //      }
    };

 

   return (
      <AuthContext.Provider value={{initSession, user ,isAutenticado,verificacionJwt,initSessionAdmin,isautAdmin,setUser,setIsAutAdmin}}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContext;