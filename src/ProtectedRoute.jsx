import { useEffect, useState } from "react";
import { useAuth } from "./context/AuthContext"
import { useNavigate,Outlet } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
import { changeAuthOrg } from "./store/estados/orgaAuth";
import Loader from "./Components/Loader/Loader";
import { addUserOrg } from "./store/users/userSliceOrg";
import { helphttp } from "./Helpers/helphttps";

const ProtectedRoute=()=>{
    const api=helphttp();
    const url_verify="https://server.eventosdemarinera.com/shared/verificarToken";

const dispatch=useDispatch();
 const navigate=useNavigate();
 const orgaAuth=useSelector((state)=>state.orgaAuth);
 const userOrg=useSelector((state)=>state.userOrg);

 const [loading,setLoading]=useState(false);

 const {initSession,user,isAutenticado,verificacionJwt}=useAuth();

 useEffect(()=>{

 const verifity=async()=>{
    setLoading(true)

    const tok=localStorage.getItem('token');
    if (!tok) {
      dispatch(changeAuthOrg(false));
      return;
    }
    const token={
      token:JSON.parse(tok)
    }
    try {
      let opciones = {
        body: token,
        headers: { "content-type": "application/json" },
     };
     const consult = await api.post(url_verify, opciones);
     if (consult.status) throw new Error(consult.message);
     if (consult.role!='organizacion') throw new Error('Rol Invalido')

     dispatch(changeAuthOrg(true));
     dispatch(addUserOrg(consult))
     setLoading(false)
    }
    catch(error){
     dispatch(changeAuthOrg(false));
     setLoading(false)
     console.log(error.message);

    }
  }   
  verifity()
 },[navigate])

   useEffect(()=>{
     if (orgaAuth.auth==false) {
        navigate('/loginOrganizacion')
     }
   },[orgaAuth])


    // console.log('estaautenticado',isAutenticado);
        return(
            <Outlet></Outlet>
        )
}

export default ProtectedRoute