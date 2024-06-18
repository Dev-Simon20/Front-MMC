import "./tabdetalles.css";
import formatoFecha from "../../../../../functions/formatoFecha";
import BasicModal from "../../ModalImg/BasicModal";
import { useState } from "react";
import { red } from "@mui/material/colors";
import { useEffect } from "react";
const formatDate = (date) => {
   const year = date.getFullYear();
   const month = String(date.getMonth() + 1).padStart(2, "0");
   const day = String(date.getDate()).padStart(2, "0");
   const hours = String(date.getHours()).padStart(2, "0");
   const minutes = String(date.getMinutes()).padStart(2, "0");
   const seconds = String(date.getSeconds()).padStart(2, "0");

   return `${year}${month}${day}T${hours}${minutes}${seconds}`;
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
const TabDetalle = ({ evento }) => {
   const [open, setOpen] = useState(false);
   const [redess, setRedes] = useState([]);

   const handleAddToGoogleCalendar = (fecha, nombre, nombreEvent) => {
      const title = encodeURIComponent(`Evento de marinera: ${nombreEvent}`);
      const description = encodeURIComponent(
         `Evento de  Marinera organizado por: ${nombre} `
      );
      const location = encodeURIComponent("Chicalyo");

      // Generar fechas y horas dinámicamente
      const startDate = new Date(fecha);
      const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Sumar una hora a la fecha de inicio

      const startDateString = encodeURIComponent(formatDate(startDate)); // Convertir a formato de texto y codificar URI
      const endDateString = encodeURIComponent(formatDate(endDate)); // Convertir a formato de texto y codificar URI

      const timezone = encodeURIComponent("America/New_York");

      const googleCalendarUrl = `https://calendar.google.com/calendar/r/eventedit?text=${title}&details=${description}&location=${location}&dates=${startDateString}/${endDateString}&ctz=${timezone}`;

      window.open(googleCalendarUrl, "_blank");
   };

   const goToMaps = (url) => {
      window.open(url, "_blank");
   };
   const handleCallButtonClick = (phoneNumber) => {
      window.open(`tel:${phoneNumber}`);
   };

   const goToRedSocial = (url) => {
      window.open(url, "_blank");
   };

   const nombreRedSocial = (url) => {
      let fb = "facebook";
      let inst = "instagram";
      let tik = "tiktok";
      let youtu = "youtube";
      if (url.toLowerCase().includes(fb)) {
         return "fa-brands fa-square-facebook";
      } else if (url.toLowerCase().includes(inst)) {
         return "fa-brands fa-square-instagram";
      } else if (url.toLowerCase().includes(tik)) {
         return "TikTok";
      } else if (url.toLowerCase().includes(youtu)) {
         return "fa-brands fa-youtube";
      } else {
         return "Link red Social";
      }
   };

   useEffect(() => {
      if (evento.redes) {
         let objeto = JSON.parse(evento.redes);
         let redes = [];

         if (objeto.facebook) {
            redes.push({
               tipo: "fb",
               link: objeto.facebook,
               color:'#1877f2'
            });
         }
         if (objeto.instagram) {
            redes.push({
               tipo: "ins",
               link: objeto.instagram,
               color:'#D43089'
            });
         }
         if (objeto.youtube) {
            redes.push({
               tipo: "you",
               link: objeto.youtube,
               color:'#FF0000'
            });
         }
         setRedes(redes);
      }
   }, [evento.redes]);
   return (
      <div className="contentTabDetalles">
         <article className="contenTextos">
            <section>
               <div>
                  <i className="fa-regular fa-circle-check"></i>
                  <p>Fecha:</p>
                  {evento.fecha ? (
                     <p>{formatoFecha(evento.fecha)}</p>
                  ) : (
                     <p>Cargando....</p>
                  )}
               </div>
               <hr />
            </section>
            <section>
               <div>
                  <i className="fa-regular fa-circle-check"></i>
                  <p>Hora de inicio:</p>
                  {evento.fecha ? (
                     <p>{formatearHoraaa(evento.fecha)}</p>
                  ) : (
                     <p>Cargando....</p>
                  )}
               </div>
               <hr />
            </section>
            {evento.hora&&<section>
               <div>
                  <i className="fa-regular fa-circle-check"></i>
                  <p>Segunda fecha:</p>
                     <p>{formatoFecha(evento.hora)} {formatearHoraaa(evento.hora)} </p>

               </div>
               <hr />
            </section>}
            <section>
               <div>
                  <i className="fa-regular fa-circle-check"></i>
                  <p>Coliseo o institución:</p>
                  {evento.lugar ? <p>{evento.lugar}</p> : <p>Cargando....</p>}
               </div>
               <hr />
            </section>
            <section>
               <div>
                  <i className="fa-regular fa-circle-check"></i>
                  <p>¿Cómo llegar?: </p>
                  <p
                     className="linkwindow"
                     onClick={() => goToMaps(evento.linkMaps)}
                  >
                     Google maps
                  </p>
               </div>
               <hr />
            </section>
            <section>
               <div>
                  <i className="fa-regular fa-circle-check"></i>
                  <p>Llámalos: </p>
                  {evento.telefono ? (
                     <p
                        className="linkwindow"
                        onClick={() => handleCallButtonClick(evento.telefono)}
                     >
                        {evento.telefono}
                     </p>
                  ) : (
                     <p className="linkwindow">Cargando....</p>
                  )}
               </div>
               <hr />
            </section>
            <section>
               <div>
                  <i className="fa-regular fa-circle-check"></i>
                  <p>Red social de la organización: </p>
                  <div id="conten_redes_detalles">
                     {redess &&
                        redess.map((red,i) => (
                           <i key={i} style={{color:`${red.color}`}} onClick={()=>goToRedSocial(red.link)} className={nombreRedSocial(red.link)}></i>
                        ))}
                  </div>
               </div>
               <hr />
            </section>
            <section>
               <div>
                  <i className="fa-regular fa-circle-check"></i>
                  <p>¿Te gustaría agendarlo?</p>
                  <i
                     className="fa-regular fa-calendar icon-calendar"
                     onClick={() =>
                        handleAddToGoogleCalendar(
                           evento.fecha,
                           evento.nombre_org,
                           evento.nombre_concurso
                        )
                     }
                  ></i>
               </div>
               <hr />
            </section>
         </article>
         <div className="afiche_conten">
            <img src={evento.banner_con} onClick={() => setOpen(true)} alt="" />
            <BasicModal
               url_image={evento.banner_con}
               setOpen={setOpen}
               open={open}
            />
         </div>
      </div>
   );
};

export default TabDetalle;
