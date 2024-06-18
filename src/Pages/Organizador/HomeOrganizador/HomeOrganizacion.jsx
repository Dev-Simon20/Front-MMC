
import { useState ,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { helphttp } from "../../../Helpers/helphttps"
import { useAuth } from "../../../context/AuthContext";
import './HomeOrg.css'
import { changeAuthOrg } from "../../../store/estados/orgaAuth";
import { useDispatch } from "react-redux";
import MultiActionAreaCard from "../../../Components/CardMu/CardMu";
import Button from '@mui/material/Button';
import logo from "./logo-bl.png"

// userOrg
// :
// {cod_organizador: 4, director: "Armando Alberto Man…}
// cod_organizador
// :

const HomeOrganizacion=()=>{
  const dispatch=useDispatch();
  const {initSession,user,isAutenticado,verificacionJwt}=useAuth();
    const navigate = useNavigate();
    const api = helphttp();
     const cod_orga=useParams().cod_orga;
    const url= `https://server.eventosdemarinera.com/userorg/concursos/${cod_orga}`
    const url_logout= "https://server.eventosdemarinera.com/shared/logout";

    const [concursos,setConcursos]=useState([])
    
    useEffect(() => {
        const obtenerCon = async () => {
          try {
            const data = await api.get(url);
            if(data.status==400) throw new Error(data.message) 
            setConcursos(data)
          } catch (error) {
            console.log(error.message);
          }
        };
        obtenerCon();
      }, []);

      const navegar=(cod,nombreC)=>{
        const sinEspacios = nombreC.replace(/\s/g, '');
         const   nombre = sinEspacios.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        navigate(`/Organizacion/Concurso/${nombre}/${cod}`);
      }

      const outlog=()=>{
        localStorage.setItem('token','');
        dispatch(changeAuthOrg(false))
       }
    return(<div className="conten-Eventos">
       <header className="conten-head-c">
           <img  className="conten-head-c-img" src={logo} alt="" />
           <div className="conten-head-c-text">
             {/* <p>Total de Inscritos {concursantes.length}</p> */}
             {/* {userOrg.role=='organizacion'&&<i onClick={outlog} className="fa-solid fa-arrow-right-from-bracket"></i>} */}
           </div>
         </header>
      <h1 className="tit-org">Mis Eventos</h1>
      <div className="cardsEvent">
      {concursos&&concursos.map((con,i)=>(
          <MultiActionAreaCard key={i} nombre={con.nombre_concurso} lugar={con.lugar} codigo={con.cod_concurso} imagen={con.banner_con}/>
    ))}
      </div>
       <br /><br /><br />
      <Button onClick={outlog} variant="outlined" color="error">
        Cerrar Sessión
      </Button>
    </div>
    )
}

export default HomeOrganizacion