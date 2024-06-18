import "./card.css";
import formatoFecha from "../../functions/formatoFecha";
import { useNavigate } from "react-router-dom";
import BotonCards from "../BotonCards/BotonCards";
import { useEffect, useState } from "react";
import { helphttp } from "../../Helpers/helphttps";
import { color } from "framer-motion";
import lugares from "../../functions/lugares";
import { buscarDistritoPorId, buscarProvinciaPorId } from "../../functions/busquedaBinarias";
const Card = ({ evento, ciudades }) => {
   const [modalidades, setModalidades] = useState(null);
   const [ciudadC, setCiudadE] = useState("");
   const [styleConten, setStyleContent] = useState({ color: "red" });
   const [styleI, setStyleI] = useState({ color: "red" });
   const {
      cod_concurso,
      fecha,
      hora,
      lugar,
      nombre_concurso,
      banner_con,
      tipos_evento_cod_tipo,
      departamento,
      provincia,
      slug,
      distrito
   } = evento;
   const navigate = useNavigate();
   let imagenEvento =
      "https://www.iperu.org/wp-content/uploads/2015/12/danza-marinera-nortena.jpg";

   const tipoEvento = (tipo) => {
      switch (tipo) {
         case 1:
            return (
               <div className="cf_tipo" style={{ backgroundColor: "#1dda8e" }}>
                  <i
                     style={{ backgroundColor: "white", color: "#1dda8e" }}
                     className="fa-solid fa-wine-glass"
                  ></i>
                  {/* <p>Aniversario</p> */}
               </div>
            );
         case 2:
            return (
               <div className="cf_tipo" style={{ backgroundColor: "#45204b" }}>
                  <i
                     style={{ backgroundColor: "white", color: "#45204b" }}
                     className="fa-solid fa-trophy"
                  ></i>
                  {/* <p>Concurso</p> */}
               </div>
            );
         case 3:
            return (
               <div className="cf_tipo" style={{ backgroundColor: "#F0B23F" }}>
                  <i
                     style={{ backgroundColor: "white", color: "#F0B23F" }}
                     className="fa-solid fa-crown"
                  ></i>
                  {/* <p>Coronación de Reinas</p> */}
               </div>
            );
         case 4:
            return (
               <div className="cf_tipo" style={{ backgroundColor: "#e7294f" }}>
                  <i
                     style={{ backgroundColor: "white", color: "#e7294f" }}
                     className="fa-solid fa-drum"
                  ></i>
                  {/* <p>Ensayo con Bandas</p> */}
               </div>
            );
         case 5:
            return (
               <div className="cf_tipo" style={{ backgroundColor: "#45204b" }}>
                  <i
                     style={{ backgroundColor: "white", color: "#45204b" }}
                     className="fa-regular fa-handshake"
                  ></i>
                  {/* <p>Solidario</p> */}
               </div>
            );
         default:
            break;
      }
   };

   const nombreEvento = (t, n) => {
      if (t == 4) {
         return `Ensaya con ${n}`;
      } else {
         return n;
      }
   };

   function formatearHoraaa(fechaStr) {
      // Crear un objeto Date a partir de la cadena de fecha
      let fecha = new Date(fechaStr);

      // Obtener la hora y los minutos
      let horas = fecha.getHours();
      let minutos = fecha.getMinutes();

      // Determinar si es AM o PM
      let periodo = horas >= 12 ? "pm" : "am";

      // Convertir la hora al formato de 12 horas
      horas = horas % 12;
      horas = horas ? horas : 12; // La hora '0' debe ser '12'

      // Asegurarse de que los minutos siempre tengan dos dígitos
      minutos = minutos < 10 ? "0" + minutos : minutos;

      // Formatear la hora
      let horaFormateada = horas + ":" + minutos + " " + periodo;

      return horaFormateada;
   }

   const nombreCiuda = (cod, t, n) => {
      if (t == 4) {
         return n;
      } else {
         const c = ciudades.filter((c) => c.cod_ciudad == cod);
         return c[0].nombre;
      }
   };
   const limpiar = (cadena) => {
      const sinEspacios = cadena.replace(/\s/g, "");
      const sinTildes = sinEspacios
         .normalize("NFD")
         .replace(/[\u0300-\u036f]/g, "");
      return sinTildes;
   };
   const tipeEvento = (tipo) => {
      switch (tipo) {
         case 1:
            return "celebraciones";
         case 2:
            return "concurso";
         case 3:
            return "coronación-de-reinas";
         case 4:
            return "ensayo-con-banda";
         case 5:
            return "solidario";
         default:
            break;
      }
    };
   const navegar = () => {
      navigate(`/calendario/${tipeEvento(tipos_evento_cod_tipo)}/${slug}`);

   };

   const buscarProvincia = (cod_dep, cod_pro) => {
      let filtro = lugares.provincias.filter(
         (pro) => pro.department_id == cod_dep
      );
      return buscarProvinciaPorId(filtro, cod_pro);
   };
   const buscarDistrito=(cod_pro,cod_dis)=>{
      let filtro=lugares.distritos.filter((d)=>d.province_id==cod_pro);

      return buscarDistritoPorId(filtro,cod_dis)
   }
   return (
     // <div className="contenCard">
         <div className="Card">
            <section className="cardHead" onClick={navegar}>
               <img className="imgEvento" src={banner_con} alt={imagenEvento} />
            </section>
            <section className="cardFoot">
               {tipoEvento(tipos_evento_cod_tipo)}
               <p className="c-nombre">
                  {nombreEvento(tipos_evento_cod_tipo, nombre_concurso)}
               </p>
               <p className="c-subtitle">
                  {buscarDistrito(provincia,distrito)}, {buscarProvincia(departamento, provincia)}
               </p>
               <section className="conten-icons">
                  <div id="locacion-E" className="cf_tl">
                     <i className="fa-solid fa-location-dot"></i>
                     <p>{lugar}</p>
                  </div>
                  <div className="cf_tl" id="time-E">
                     <i className="fa-regular fa-calendar"></i>
                     <p>{formatoFecha(fecha)}   </p>
                     {/* <p>{formatoFecha(fecha)} {hora&&` y  ${formatoFecha(hora)}`}  </p> */}

                  </div>
                  <div id="fecha-E" className="cf_tl">
                     <i className="fa-regular fa-clock"></i>
                     <p>{formatearHoraaa(fecha)}</p>
                  </div>
               </section>
               <BotonCards evento={evento} />
            </section>
         </div>
     // </div>
   );
};

export default Card;
