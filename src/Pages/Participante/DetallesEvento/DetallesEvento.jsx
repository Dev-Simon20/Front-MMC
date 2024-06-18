import "./detalle.css";
import Avatar from "@mui/material/Avatar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import port from "../ListaConcurso/port.jpg";
import { motion } from "framer-motion";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import TabDetalle from "./tabs/TabDetalle/TabDetalle";
import TabBases from "./tabs/TabBases/TabBases";
import TabReinas from "./tabs/TabReinas/TabReinas";
import aniversario from "./img/aniversario.jpg";
import concurso from "./img/concurso.jpg";
import coronacion from "./img/coronacion.jpg";
import ensayo from "./img/ensayo.jpg";
import solidario from "./img/solidario.jpg";
import logob from "../VerificacionRegistro/logob.png";
import Footer from "../../../Components/Footer/Footer";
import { Helmet } from "react-helmet";
import Header from "../../../Components/Header/Header";
import lugares from "../../../functions/lugares";
import { buscarProvinciaPorId } from "../../../functions/busquedaBinarias";
import { Tooltip } from "@mui/material";
import BasesLuis from "./tabs/BasesLuis/BasesLuis";
import RegistroPar from "../RegistroParticipante/RegistroParticipante";
import TabInscripciones from "./tabs/TabInscripciones/TabInscripciones";

const makeRequestWithTimeout = async (url) => {
   try {
      const response = await axios.get(url, { timeout: 3000 });
      return response.data;
   } catch (error) {
      console.error("Error:", error.message);
      if (error.code === "ECONNABORTED") {
         console.log("Timeout excedido. Volviendo a intentar la solicitud...");
         return await makeRequestWithTimeout(url); // Llamada recursiva
      } else {
         throw error;
      }
   }
};

function ordenarPorLetraInicial(a, b) {
   const palabrasOrden = ["ser", "ind", "nov", "nac", "cam", "inc", "la"];

   // Función auxiliar para obtener la palabra clave de la propiedad nombre_mod
   function obtenerPalabraClave(objeto) {
      let nombre = objeto.nombre_mod.toLowerCase();
      for (let palabra of palabrasOrden) {
         if (nombre.startsWith(palabra)) {
            return palabra;
         }
      }
      return nombre; // Si no se encuentra ninguna palabra clave, se devuelve el nombre completo
   }

   let palabraA = obtenerPalabraClave(a);
   let palabraB = obtenerPalabraClave(b);

   // Ordenar por la palabra clave obtenida
   return palabrasOrden.indexOf(palabraA) - palabrasOrden.indexOf(palabraB);
}
const ciudades = [
   { cod_ciudad: 1, nombre: "Lima" },
   { cod_ciudad: 2, nombre: "Ica" },
   { cod_ciudad: 3, nombre: "Chota" },
   { cod_ciudad: 4, nombre: "Huaral" },
   { cod_ciudad: 5, nombre: "Huancayo" },
   { cod_ciudad: 6, nombre: "Cusco" },
   { cod_ciudad: 7, nombre: "Chimbote" },
   { cod_ciudad: 8, nombre: "Pucallpa" },
   { cod_ciudad: 9, nombre: "Paiján" },
   { cod_ciudad: 10, nombre: "Trujillo" },
   { cod_ciudad: 11, nombre: "Tacna" },
   { cod_ciudad: 12, nombre: "Catacaos" },
   { cod_ciudad: 13, nombre: "Piura" },
   { cod_ciudad: 14, nombre: "Chiclayo" },
   { cod_ciudad: 15, nombre: "Chincha" },
   { cod_ciudad: 16, nombre: "Arequipa" },
   { cod_ciudad: 17, nombre: "Cajamarca" },
   { cod_ciudad: 18, nombre: "Callao" },
   { cod_ciudad: 19, nombre: "Ayacucho" },
];
const tipoEvento = (tipo) => {
   switch (tipo) {
      case 1:
         return (
            <div
               style={{
                  outline: "5px solid white",
                  backgroundColor: "#1dda8e",
               }}
               //
               className="icon-event"
            >
               <i
                  style={{ color: "white" }}
                  className="fa-solid fa-wine-glass"
               ></i>
            </div>
         );
      case 2:
         return (
            <div
               style={{
                  outline: "5px solid white",
                  backgroundColor: "#45204b",
               }}
               className="icon-event"
            >
               <i style={{ color: "white" }} className="fa-solid fa-trophy"></i>
            </div>
         );
      case 3:
         return (
            <div
               style={{
                  outline: "5px solid white",
                  backgroundColor: "#F0B23F",
               }}
               className="icon-event"
            >
               <i style={{ color: "white" }} className="fa-solid fa-crown"></i>
            </div>
         );
      case 4:
         return (
            <div
               style={{
                  outline: "5px solid white",
                  backgroundColor: "#e7294f",
               }}
               className="icon-event"
            >
               <i style={{ color: "white" }} className="fa-solid fa-drum"></i>
            </div>
         );
      case 5:
         return (
            <div
               style={{
                  outline: "5px solid white",
                  backgroundColor: "#45204b",
               }}
               className="icon-event"
            >
               <i
                  style={{ color: "white" }}
                  className="fa-regular fa-handshake"
               ></i>
            </div>
         );
      case 6:
         return (
            <div
               style={{ outline: "2px solid #45204b" }}
               className="icon-event"
            >
               <i
                  style={{ color: "#45204b" }}
                  className="fa-solid fa-spinner"
               ></i>
            </div>
         );
      default:
         break;
   }
};
const nombreEvento = (tipo) => {
   switch (tipo) {
      case 1:
         return "Celebraciones";
      case 2:
         return "Concurso";
      case 3:
         return "Coronación de Reinas";
      case 4:
         return "Ensayo con Banda";
      case 5:
         return "Solidario";
      default:
         break;
   }
};

const colorEvento = (tipo) => {
   switch (tipo) {
      case 1:
         return "#1dda8e";
      case 2:
         return "#45204b";
      case 3:
         return "#F0B23F";
      case 4:
         return "#e7294f";
      case 5:
         return "#45204b";
      default:
         break;
   }
};

function limpiar(cadena) {
   const sinEspacios = cadena.replace(/\s/g, "");
   const sinTildes = sinEspacios
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
   return sinTildes;
}
const buscarProvincia = (cod_dep, cod_pro) => {
   let filtro = lugares.provincias.filter(
      (pro) => pro.department_id == cod_dep
   );
   return buscarProvinciaPorId(filtro, cod_pro);
};
const DetallesEvento = () => {
   const [alertSucces, setAlertSuces] = useState(false);
   const [selectedTab, setSelectedTab] = useState(0);
   const [evento, setEvento] = useState("");
   const [contador, setContador] = useState(null);
   const navigate = useNavigate();

   const tipo = useParams().tipo_evento;
   const slug = useParams().slug;
   const url = `https://server.eventosdemarinera.com/userpar/detalles/${slug}`;


   const tieneBases = slug == 'caballero-de-los-mares-arequipa-2024' || slug == "anthony's-friends-lima-2024-2";



   useEffect(() => {
      window.scrollTo({
         top: 0,
         behavior: "auto", // Desplazamiento suave
      });
      const obtenerData = async () => {
         try {
            const response = await makeRequestWithTimeout(url);
            setEvento(response[0]);
            console.log('detalles',response[0])
            setContador(response[0].cont_vistas);
         } catch (error) {
            console.log(error);
         }
      };
      obtenerData();
   }, []);



   useEffect(() => {
      const timer = setTimeout(() => {
         const urlContador =
            "https://server.eventosdemarinera.com/userpar/contador";
         const updateVistas = async () => {
            let sumaVistas = contador + 1;
            let cuerpo = {
               slug: slug,
               contador: sumaVistas,
            };
            try {
               const data = await axios.post(urlContador, cuerpo);
               setContador(sumaVistas);
            } catch (error) {
               console.log(error);
            }
         };
         if (evento && contador != null) {
            updateVistas();
         } else {
            console.log("Error en el servidor");
         }
      }, 3000);
      return () => {
         clearTimeout(timer);
      };
   }, [evento]);

   function handleTabChange(event, value) {
      setSelectedTab(value);
   }

   const navegar = () => {
      navigate(`/calendario/${tipo}/${slug}/registro`);
   };

   const copiarEnlace = (url, cod) => {
      navigator.clipboard.writeText(
         `https://eventosdemarinera.com/calendario/${tipo}/${slug}`
      );
      setAlertSuces(true);
      setTimeout(() => {
         setAlertSuces(false);
      }, 3000);
   };

   const buscarCiudad = (cod) => {
      let filtro = ciudades.filter((c) => c.cod_ciudad == cod);
      return `${filtro[0].nombre}`;
   };

   const imgTipoEvento = (cod_tipo) => {
      if (cod_tipo == 1) {
         return aniversario;
      } else if (cod_tipo == 2) {
         return concurso;
      } else if (cod_tipo == 3) {
         return coronacion;
      } else if (cod_tipo == 4) {
         return ensayo;
      }
   };

   return (
      <div className="content-Detalles">
         <Helmet
            title={`Calendario - ${
               evento.nombre_concurso && evento.nombre_concurso
            }`}
            
         />

         <Header />
         <div className="content-header">
            <div className="cont-detail-img">
               {evento.tipos_evento_cod_tipo ? (
                  <img
                     src={imgTipoEvento(evento.tipos_evento_cod_tipo)}
                     alt="Profile Cover"
                  />
               ) : (
                  <img src={solidario} alt="Profile Cover" />
               )}

               <div className="img_textos">
                  {evento.tipos_evento_cod_tipo ? (
                     <p>{nombreEvento(evento.tipos_evento_cod_tipo)}</p>
                  ) : (
                     <p>Cargando....</p>
                  )}
                  {evento.nombre_concurso ? (
                     <p>{evento.nombre_concurso}</p>
                  ) : (
                     <p>Cargando....</p>
                  )}
                  {evento.departamento ? (
                     <p>
                        {buscarProvincia(evento.departamento, evento.provincia)}
                     </p>
                  ) : (
                     <p>Cargando....</p>
                  )}
               </div>
            </div>
            <section className="conten-desc-tab">
               <article className="content-Des">
                  {evento.tipos_evento_cod_tipo
                     ? tipoEvento(evento.tipos_evento_cod_tipo)
                     : tipoEvento(6)}
                  <div className="cont-boxes">
                     <div className="cont-titulo cb">
                        {evento.nombre_org ? (
                           <p>{evento.nombre_org}</p>
                        ) : (
                           <p>Cargando....</p>
                        )}
                        <p>Organización</p>
                     </div>
                     <div className="vistas cb">
                        <p>{contador}</p>
                        <p>Visitas</p>
                     </div>
                     <div
                        className="cont-share cb"
                        onClick={() =>
                           copiarEnlace(
                              evento.nombre_concurso,
                              evento.cod_concurso
                           )
                        }
                     >
                        <i className="fa-solid fa-share-nodes"></i>
                        <p>Compartir</p>
                        {alertSucces && (
                           <div className="cont-Alert">
                              <Alert
                                 className="alertas"
                                 style={{
                                    width: "100%",
                                    height: "35px",
                                    borderRadius: "12px",
                                    fontSize: window.innerWidth>800 ? "18px":"14px",
                                    display: "flex",
                                    alignItems: "center",
                                 }}
                                 severity="success"
                              >
                                 Enlace copiado
                              </Alert>
                           </div>
                         )} 
                     </div>
                  </div>
               </article>
               <article
                  // style={{
                  //    minWidth:
                  //       evento.tipos_evento_cod_tipo == 2 ? "500px" : "545px",
                  //    marginRight: evento.tipos_evento_cod_tipo != 2 && "0%",
                  // }}
                  className="cambio_tabs"
               >
                  <Tabs
                     value={selectedTab}
                     onChange={handleTabChange}
                     indicatorColor="red"
                     textColor="inherit"
                     variant="scrollable"
                     scrollButtons={false}
                     className="-mx-4 min-h-40 tbs"
                     classes={{
                        indicator:
                           "flex justify-center bg-transparent w-full h-full tbs",
                     }}
                     TabIndicatorProps={{
                        children: (
                           <Box
                              sx={{ bgcolor: "text.disabled" }}
                              className="w-full h-full rounded-full opacity-20 tb"
                           />
                        ),
                        style: {
                           backgroundColor: `${colorEvento(
                              evento.tipos_evento_cod_tipo
                           )}`,
                        },
                     }}
                  >
                     <Tab
                        className="text-14 font-semibold min-h-40 mx-4 px-12 optionTab tabone"
                        disableRipple
                        label="Detalles"
                        style={{
                           width: evento.tipos_evento_cod_tipo != 2 && "100%",
                           alignItems:
                              evento.tipos_evento_cod_tipo != 2 && "flex-start",
                           paddingLeft:
                              evento.tipos_evento_cod_tipo != 2 && "0",
                        }}
                     />

                     {evento.tipos_evento_cod_tipo == 2 && tieneBases && (
                              <Tab
                                 className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 optionTab tabtwo"
                                 label="Bases"
                                 disableRipple
                                 disabled={false}
                              />
                     )}

                     {evento.tipos_evento_cod_tipo == 2 && !tieneBases &&(
                        <Tooltip
                           title="Contactar para habilitar"
                           placement="bottom"
                           enterDelay={500}
                           leaveDelay={200}
                        >
                           <span>
                              <Tab
                                 className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 optionTab tabtwo"
                                 label="Bases"
                                 disableRipple
                                 disabled={true}
                              />
                              </span>
                        </Tooltip>
                     )}


                     {evento.registroactive == 1 && (
                        <Tab
                           className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 optionTab tabfor"
                           disableRipple
                           // onClick={navegar}
                           label="Inscripciones"
                           style={{color:'#45204b'}}
                        />
                     )}
                  </Tabs>
               </article>
            </section>
         </div>
         {/* const tieneBases = slug == 'caballero-de-los-mares-arequipa-2024' || slug == "anthony's-friends-lima-2024-2"; */}

         <div className="conten-Bodys">
            {selectedTab === 0 && <TabDetalle evento={evento} />}
            {selectedTab === 1 && slug == 'caballero-de-los-mares-arequipa-2024'&& <BasesLuis/>}
            {selectedTab === 1 && slug == "anthony's-friends-lima-2024-2" && <TabBases/>}
            {selectedTab === 2 && <TabInscripciones cod_concurso={evento.cod_concurso} slugy={slug}/>} 
         </div>
         
         <Footer />
      </div>
   );
};

export default DetallesEvento;
