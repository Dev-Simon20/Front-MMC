import "./VerificacionRegistro.css";
import axios from "axios";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CourseCard from "../../../Components/CourseCard/CourseCard";

const categoriasDefault=[
   {
       año_max: 0,
       año_min: 0,
       cod_categoria: 24,
       nombre_cat: "Baby"
   },
   {
       año_max: 0,
       año_min: 0,
       cod_categoria: 1,
       nombre_cat: "Pre Infante"
   },
   {
       año_max: 0,
       año_min: 0,
       cod_categoria: 2,
       nombre_cat: "Infante"
   },
   {
       año_max: 0,
       año_min: 0,
       cod_categoria: 3,
       nombre_cat: "Infantil"
   },
   {
       año_max: 0,
       año_min: 0,
       cod_categoria: 4,
       nombre_cat: "Junior"
   },
   {
       año_max: 0,
       año_min: 0,
       cod_categoria: 5,
       nombre_cat: "Juvenil"
   },
   {
       año_max: 0,
       año_min: 0,
       cod_categoria: 6,
       nombre_cat: "Adulto"
   },
   {
       año_max: 0,
       año_min: 0,
       cod_categoria: 7,
       nombre_cat: "Senior"
   },
   {
       año_max: 0,
       año_min: 0,
       cod_categoria: 8,
       nombre_cat: "Master"
   },
   {
       año_max: 0,
       año_min: 0,
       cod_categoria: 9,
       nombre_cat: "Oro"
   }
]


const VerificacionRegistro = ({cod_concurso}) => {
   const [dni, setDni] = useState("");
   const [activar, setActivar] = useState(true);
   const [participantes, setParticipantes] = useState(null);
   const [registros, setRegistros] = useState([]);
   const [categorias, setCategorias] = useState(categoriasDefault);
   const [coincidencia, setCoincidencia] = useState(false);
   const handleChange = (e) => {
      setDni(e.target.value);
      setCoincidencia(false);
   };


   const handleClick = () => {
      if(dni!=""){
      if (participantes.length >=1) {
         let res = participantes.filter(
            (con) => con.dni_1 === dni || con.dni_2 === dni
         );
         if (res.length == 0) {
            setCoincidencia(true);
            setRegistros([])
         }
         else{
            setRegistros(res);
         }
      }
      else {
        setCoincidencia(true);
     }
   }
   else{
      setRegistros([])
   }
   };



   useEffect(() => {
      const peticion = async () => {
         const dataConcursantes = await axios.get(`https://server.eventosdemarinera.com/userorg/concurso/participantes/${cod_concurso}`);
         setActivar(false);
         setParticipantes(dataConcursantes.data);
      };
      peticion();
   }, []);

   return (
      <div className="contentVerify">
         <div className="FormVerify">
             {participantes?<input
               disabled={activar}
               type="text"
               onChange={handleChange}
               maxLength={14}
               placeholder="Ingrese el DNI del o uno de los participantes"
            />:<p>Cargando...</p>}
            <button onClick={handleClick}> <i className="lupa fa-solid fa-magnifying-glass"></i> Buscar</button>
         </div>
         {coincidencia&&<p className="coincidencias">No se Encontraron Coincidencias</p>}
         <div className="tableConten">
             {registros.map((registro,i)=><CourseCard key={i} registro={registro} categorias={categorias}/>)}
         </div>
      </div>
   );
};

export default VerificacionRegistro;
