import { Link, NavLink, Outlet,useNavigate } from "react-router-dom";
import "./Administrador.css";
import { useAuth } from "../../../context/AuthContext";
import { useEffect, useState } from "react";
import Cookies from "../../../Cookies";
import { helphttp } from "../../../Helpers/helphttps";
import { useSelector,useDispatch } from "react-redux";
import { changeAuth } from "../../../store/estados/adminAuth";
import Loader from "../../../Components/Loader/Loader";


const Administrador = () => {
  const [loading,setLoading]=useState(true);
  const api=helphttp();
  const navigate=useNavigate();
  const {user,isautAdmin,setUser,setIsAutAdmin}=useAuth();
  const url_verify="https://server.eventosdemarinera.com/shared/verificarToken";
  const authAdmin=useSelector((state)=>state.adminAuth)
  const tokenAdmin=useSelector((state)=>state.tokenAdmin)
  const dispatch=useDispatch();
  

  //  useEffect(()=>{
  //   setLoading(true)
  //   const tok=localStorage.getItem('token');
  //   if (!tok) {
  //     dispatch(changeAuth(false));
  //     return;
  //   }
  //   const token={
  //     token:JSON.parse(tok)
  //   }
  //   console.log(token);
    
  //   const verifity=async()=>{
  //     try {
  //       let opciones = {
  //         body: token,
  //         headers: { "content-type": "application/json" },
  //      };
  //      const consult = await api.post(url_verify, opciones);
  //      if (consult.status) throw new Error(consult.message);
  //      if (consult.role!='administrador') throw new Error('Rol Invalido')
  //      dispatch(changeAuth(true));
  //      setLoading(false)
  //     }
  //     catch(error){
  //       console.log(error.message);
  //      dispatch(changeAuth(false));
  //      console.log(authAdmin.auth);
  //      setLoading(false)

  //     }
  //   }   
  //   verifity()
  //  },[navigate])

  //  useEffect(()=>{
  //    if (authAdmin.auth==false) {
  //      navigate('/loginadmin')   
  //    }
     
  //  },[authAdmin])

   const outlog=()=>{
    localStorage.setItem('token','');
    dispatch(changeAuth(false))
   }
  return (
    <div>
     <section className="admin-menu">
        <nav className="">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-Link allAc" : "optionMenu allAc"
            }
            to="/administrador"
            end
          >
            <i className="men-i fa-solid fa-house-user"></i>Inicio
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "active-Link allAc" : "optionMenu allAc"
            }
            to="/administrador/eventos"
           
          >
            {" "}
            <i className="men-i fa-regular fa-rectangle-list"></i> Lista de Eventos
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "active-Link allAc" : "optionMenu allAc"
            }
            to="/administrador/crearevento"
            end
          >
            <i className="men-i fa-solid fa-circle-plus"></i>Crear un evento
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "active-Link allAc" : "optionMenu allAc"
            }
            to="/administrador/listaorganizadores"
            end
          >
            <i className="men-i fa-solid fa-user-plus"></i>Crear Organizador
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "active-Link allAc" : "optionMenu allAc"
            }
            to="/administrador/eventospasados"
            end
          >
            <i className="men-i fa-solid fa-backward-fast"></i>Eventos Pasados
          </NavLink>

         <button className="sesion-out" onClick={outlog}>Cerrar Session</button>
          
        </nav>
        <div className="bodyAdmin">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Administrador;
