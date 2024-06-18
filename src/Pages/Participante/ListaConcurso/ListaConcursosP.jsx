import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { helphttp } from "../../../Helpers/helphttps";
import Card from "../../../Components/Card-Event.jsx/card";
import "./Lista.css";
import port from "./port.jpg";
import publicar from "./publicar.png";
import publicar_movil from "./publicar_movil.jpg";
import ModalFecha from "../../../Components/ModalFechas/ModalFecha";
import { useModal } from "../../../HookPersonalizados/useModals";
import Select from "react-select";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import { NEWDATE } from "mysql/lib/protocol/constants/types";
import { color } from "framer-motion";
import zIndex from "@mui/material/styles/zIndex";
import logob from "../VerificacionRegistro/logob.png";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import { Helmet } from "react-helmet";
import lugares from "../../../functions/lugares";
import {
   buscarDepartamentoPorId,
   buscarProvinciaPorId,
} from "../../../functions/busquedaBinarias";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Carrusel from "../../../Components/carrusel/Carrusel";

const CustomPagination = styled(Pagination)(({ theme }) => ({
   "& .MuiPaginationItem-root": {
      fontSize: "18px", // Cambia el tamaño del texto
      width: "35px", // Ajusta el tamaño del contenedor
      height: "35px", // Ajusta el tamaño del contenedor
      borderRadius: "50%", // Hace que el contenedor sea circular
      "&:hover": {
         backgroundColor: "#c22343",
         color: "white",
         // Cambia el color según tus necesidades
      },
   },
   "& .Mui-selected": {
      backgroundColor: "#45204b !important",
      color: "white", // Cambiar el color del texto si es necesario
      "&:hover": {
         backgroundColor: "#c22343", // Cambia el color según tus necesidades
         color: "white",
      },
   },
}));

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
   ...theme.typography.body2,
   padding: theme.spacing(2),
   textAlign: "center",
   color: theme.palette.text.secondary,
   minWidth: 280,
}));

const styleTextPc = {
   "& label.Mui-focused": {
      color: "#45204b",
      marginLeft: "2px",
      paddingLeft: "0px",
   },
   "& .MuiInputLabel-outlined": {
      color: "#b6b4b4",
      fontFamily: "sansita",
      fontSize: "18px",
      paddingLeft: "25px",
      top: "-2px",
      zIndex: "0",
   },
   "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
         borderColor: "#45204b",
      },
      "& fieldset": {
         borderColor: "#45204b",
      },
   },
};

const styleTextMovil = {
   "& label.Mui-focused": {
      color: "#45204b",
      paddingLeft: "0px",
   },
   "& .MuiInputLabel-outlined": {
      color: "#322d2d",
      fontFamily: "Roboto",
      fontSize: "18px",
      paddingLeft: "20px",
      top: "-2px",
      zIndex: "0",
   },
   "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
         borderColor: "#45204b",
      },
      "& fieldset": {
         borderColor: "#ffffff",
         borderBottom: "1px solid #a4a4a49a",
      },
   },
};

function filtrarEventosPorFecha(eventos) {
   // Obtener la fecha actual (sin hora)
   const fechaActual = new Date();
   const fechaActualSinHora = new Date(
      fechaActual.getFullYear(),
      fechaActual.getMonth(),
      fechaActual.getDate()
   );

   // Filtrar los eventos
   return eventos.filter((evento) => {
      const fechaEvento = new Date(evento.fecha);
      const fechaEventoSinHora = new Date(
         fechaEvento.getFullYear(),
         fechaEvento.getMonth(),
         fechaEvento.getDate()
      );
      return fechaEventoSinHora >= fechaActualSinHora;
   });
}
const makeRequestWithTimeout = async (url) => {
   try {
      const response = await axios.get(url, { timeout: 4000 });
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

const tip = [
   {
      cod_tipo: "2",
      nombre: "Concurso",
   },
   {
      cod_tipo: "4",
      nombre: "Ensayo con bandas",
   },
   {
      cod_tipo: "3",
      nombre: "Coronación",
   },
   {
      cod_tipo: "1",
      nombre: "Celebraciones",
   },
];

const estilos = {
   option: (styles, { isFocused }) => {
      return {
         ...styles,
         border: isFocused ? "2px solid #e7294f" : "1px solid #d9d9d9",
         marginTop: 5,
         borderRadius: 8,
         color: "#45204b",
         fontWeight: "bold",
      };
   },
   singleValue: (styles, { isFocused }) => ({
      ...styles,
      color: "#45204b",
      fontWeight: "bold",
      fontSize: "18px",
   }),
   control: (styles, { isFocused }) => ({
      ...styles,
      border: isFocused ? "1px solid #45204b" : "1px solid #45204b",
      "&:hover": {
         border: "1px solid #45204b",
      },
   }),
   placeholder: (styles) => {
      return {
         ...styles,
         color: "#b6b4b4",
         fontFamily: "sansita",
         fontSize: "18px",
         paddingLeft: "35px",
      };
   },
};

const estilosMovil = {
   option: (styles, { isFocused }) => {
      return {
         ...styles,
         border: isFocused ? "1px solid #ee2e14" : "1px solid #d9d9d9",
         marginTop: 5,
         borderRadius: 0,
         color: "#45204b",
         fontWeight: "bold",
         textAlign: "start",
         paddingLeft: "30px",
      };
   },
   singleValue: (styles, { isFocused }) => ({
      ...styles,
      color: "#45204b",
      fontWeight: "bold",
      fontSize: "18px",
      textAlign: "start",
      paddingLeft: "20px",
   }),
   control: (styles, { isFocused }) => ({
      ...styles,
      border: isFocused ? "1px solid #ffffff" : "1px solid #ffffff",
      borderBottom: "1px solid #a4a4a49a",
      "&:hover": {},
   }),
   placeholder: (styles) => {
      return {
         ...styles,
         color: "#322d2d",
         fontFamily: "Roboto",
         fontSize: "18px",
         textAlign: "start",
         paddingLeft: "20px",
      };
   },
};

const saveCiudades = (eventos) => {
   let c = [];

   eventos.forEach((r) => {
      let filtro = lugares.provincias.filter(
         (pro) => pro.department_id == r.departamento
      );
      let nombrePro = buscarProvinciaPorId(filtro, r.provincia);

      if (!c.some((item) => item.cod === r.provincia))
         return c.push({ nombre: nombrePro, cod: r.provincia });
   });
   return c;
};

const saveRegiones = (eventos) => {
   let c = [];
   eventos.forEach((r) => {
      let nombreDepartamento = buscarDepartamentoPorId(
         lugares.departamentos,
         r.departamento
      );
      if (!c.some((item) => item.cod === r.departamento))
         return c.push({ nombre: nombreDepartamento, cod: r.departamento });
   });
   c.sort((a, b) => {
      return a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" });
   });
   return c;
};

const ListaConcursoP = () => {
   const [inOpenModal, openModal, closeModal] = useModal(false);
   // const [clearopt, setClearopt] = useState(true);
   // const navigate = useNavigate();
   const api = helphttp();
   const url = "https://server.eventosdemarinera.com/userpar/concursos";
   const url_Depar = "https://server.eventosdemarinera.com/shared/listaDepar";

   const [fechaBool, setFechaBool] = useState(false);
   const [busqueda, setBusqueda] = useState("");
   const [textoFecha, setTextoFecha] = useState("Fecha");
   const refTitle = useRef(null);
   const refCiudad = useRef();
   const [posicionTitulo, setPosicionTitle] = useState(520);

   //estado para mostrar el cuadro de fechas en

   //Cargar la lista de eventos y su respaldo
   const [eventos, setEventos] = useState([]);
   const [eventosshow, setEventosshow] = useState([]);

   //Se Agregaran las ciudades
   const [ciudades, setCiudades] = useState([]);
   //Se Agregaran los tipos de Eventos
   const [tipos, setTipos] = useState(tip);

   //Valores para el flitrado==>

   //1- Estado para el codigo del tipo de evento
   const [tipoE, setTipoE] = useState("");
   //2- Estado para el codigo de la ciudad
   const [ciudadE, setCiudadE] = useState("");
   //3-Valores de la fecha fecha inicio y Fin
   const [fechaInicio, setFechaInicio] = useState(
      new Date().toISOString().split("T")[0]
   );
   const [fechaFin, setFechaFin] = useState(
      new Date().toISOString().split("T")[0]
   );
   //4- Estado para el codigo del nombre del Evenoto
   const [codigoEvento, setCodigoEvento] = useState("");

   //5- Estadado para el codigo de departamento
   const [codDepartamneto, setCodDepartamento] = useState("");
   const [departamentos, setDepartamentos] = useState([]);

   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 16;
   const lastIndex = currentPage * itemsPerPage;
   const firstIndex = lastIndex - itemsPerPage;
   const currentItems = eventosshow.slice(firstIndex, lastIndex);

   const [styless, setStyless] = useState(
      window.innerWidth >= 750 ? estilos : estilosMovil
   );
   const [styleText, setStyleTextT] = useState(
      window.innerWidth >= 750 ? styleTextPc : styleTextMovil
   );

   useEffect(() => {
      const handleResize = () => {
         setStyless(window.innerWidth >= 750 ? estilos : estilosMovil);
         setStyleTextT(window.innerWidth >= 750 ? styleTextPc : styleTextMovil);
      };

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   useEffect(() => {
      window.scrollTo({
         top: 0,
         behavior: "auto",
      });
      const obtenerDatos = async () => {
         try {
            const response1 = await makeRequestWithTimeout(url);
            response1.reverse();
            let filtro = filtrarEventosPorFecha(response1);
            let filtro_2 = filtro.filter(
               (e) => e.cod_estado == 2 || e.cod_estado == 3
            );
            filtro_2 = filtro_2.sort(
               (a, b) => new Date(a.fecha) - new Date(b.fecha)
            );
            setDepartamentos(saveRegiones(filtro_2));
            setEventos(filtro_2);
            setEventosshow(filtro_2);
            setPosicionTitle(refTitle.current.getBoundingClientRect().top - 70);
         } catch (error) {
            console.log(error);
         }
      };

      obtenerDatos();
   }, []);

   const cambioCiudad = (e) => {
      let ciu = e.target.value;
      setCiudadE(ciu);
   };

   const cambioFecha = () => {
      let numeroAleatorio = Math.floor(Math.random() * 10000) + 1;
      setFechaBool(numeroAleatorio);
      setCurrentPage(1);
      closeModal();
   };

   useEffect(() => {
      setCurrentPage(1);
      if (busqueda.length >= 1) {
         let filtrar = eventos.filter((e) =>
            e.nombre_concurso.toLowerCase().includes(busqueda.toLowerCase())
         );
         setEventosshow(filtrar);
      } else {
         setEventosshow(eventos);
      }
   }, [busqueda]);

   const validarEventoEnFecha = (obj) => {
      eventosFilter = eventosFilter.filter((obj) => {
         const fi = new Date(`${fechaInicio}T00:00:00.000Z`);
         const ff = new Date(`${fechaFin}T23:59:59.999Z`);
         const fobj = new Date(obj.fecha);
         return fobj >= fi && fobj <= ff;
      });
   };

   useEffect(() => {
      setCurrentPage(1);

      /*
      const eventosTemp = eventos.filter(e => {
         (!tipoE || e.tipos_evento_cod_tipo == tipoE) &&
         (!codDepartamneto || e.departamento==codDepartamneto) &&
         (!ciudadE || e.provincia==ciudadE) &&
         (!fechaBool || validarEventoEnFecha(e))
      });
      setEventosshow(eventosTemp);
      */
      let eventosFilter = [...eventos];

      if (tipoE) {
         eventosFilter = eventosFilter.filter((event) => {
            return event.tipos_evento_cod_tipo == tipoE;
         });
      }

      if (codDepartamneto) {
         eventosFilter = eventosFilter.filter(
            (event) => event.departamento == codDepartamneto
         );
      }

      if (ciudadE) {
         eventosFilter = eventosFilter.filter((event) => {
            return event.provincia == ciudadE;
         });
      }

      if (fechaBool) {
         eventosFilter = eventosFilter.filter((event) => {
            const fi = new Date(`${fechaInicio}T00:00:00.000Z`);
            const ff = new Date(`${fechaFin}T23:59:59.999Z`);
            const fobj = new Date(event.fecha);
            return fobj >= fi && fobj <= ff;
         });
      }

      setEventosshow(eventosFilter);

      /*
      if (tipoE && ciudadE && fechaBool) {
         let filtrarxFecha = eventos.filter((obj) => {
            const fi = new Date(`${fechaInicio}T00:00:00.000Z`);
            const ff = new Date(`${fechaFin}T23:59:59.999Z`);
            const fobj = new Date(obj.fecha);
            return fobj >= fi && fobj <= ff;
         });
         let filtrarxtipo = filtrarxFecha.filter((obj) => {
            return obj.tipos_evento_cod_tipo == tipoE;
         });
         let filtrarXciudad = filtrarxtipo.filter((event) => {
            return event.provincia == ciudadE;
         });
         setEventosshow(filtrarXciudad);
      } 
      else if(codDepartamneto && !tipoE && ciudadE && !fechaBool ){
         console.log('holaaaaaaaaa');
         
         let filtroDepartamento= eventos.filter((event)=>event.departamento==codDepartamneto);
         setEventosshow(filtroDepartamento);;
      }
      else if (tipoE && !ciudadE && !fechaBool) {
         let filtrarxtipo = eventos.filter((obj) => {
            return obj.tipos_evento_cod_tipo == tipoE;
         });
         setEventosshow(filtrarxtipo);
      } else if (tipoE && !ciudadE && fechaBool) {
         let filtrarxtipo = eventos.filter((obj) => {
            return obj.tipos_evento_cod_tipo == tipoE;
         });
         let filtrarxFecha = filtrarxtipo.filter((obj) => {
            const fi = new Date(`${fechaInicio}T00:00:00.000-05:00`);
            const ff = new Date(`${fechaFin}TT23:59:59.999-05:00`);
            const fobj = new Date(obj.fecha);
            return fobj >= fi && fobj <= ff;
         });

         setEventosshow(filtrarxFecha);
      } else if (!tipoE && !ciudadE && fechaBool) {
         let filtrarxFecha = eventos.filter((obj) => {
            debugger;
            const fi = new Date(`${fechaInicio}T00:00:00.000-05:00`);
            const ff = new Date(`${fechaFin}T23:59:59.999-05:00`);
            const fobj = new Date(obj.fecha);
            return fobj >= fi && fobj <= ff;
         });
         setEventosshow(filtrarxFecha);
      } else if (!tipoE && ciudadE && fechaBool) {
         let filtrarXciudad = eventos.filter((event) => {
            return event.provincia == ciudadE;
         });
         let filtrarxFecha = filtrarXciudad.filter((obj) => {
            const fi = new Date(`${fechaInicio}T00:00:00.000-05:00`);
            const ff = new Date(`${fechaFin}T23:59:59.999-05:00`);
            const fobj = new Date(obj.fecha);
            return fobj >= fi && fobj <= ff;
         });
         setEventosshow(filtrarxFecha);
      } else if (!tipoE && ciudadE && !fechaBool) {
         let filtrarXciudad = eventos.filter((event) => {
            return event.provincia == ciudadE;
         });
         setEventosshow(filtrarXciudad);
      } else if (tipoE && ciudadE && !fechaBool) {
         let filtrarXciudad = eventos.filter((event) => {
            return event.provincia == ciudadE;
         });
         let filtrarxtipo = filtrarXciudad.filter((obj) => {
            return obj.tipos_evento_cod_tipo == tipoE;
         });
         setEventosshow(filtrarxtipo);
      
      }
      else {
         setEventosshow(eventos);
      }*/
   }, [tipoE, ciudadE, fechaBool, codDepartamneto]);

   const fechaInicial = (e) => {
      setFechaInicio(e.target.value);
      setFechaFin(e.target.value);
   };
   const fechaFinal = (e) => {
      setFechaFin(e.target.value);
   };
   const eventosHoy = () => {
      setTextoFecha("Hoy");
      var fechaActual = new Date();
      var dia = fechaActual.getDate();
      var mes = fechaActual.getMonth() + 1;
      var año = fechaActual.getFullYear();
      if (mes < 10) {
         mes = `0${mes}`;
      }
      var fechaActualComoDato = año + "-" + mes + "-" + dia;

      setFechaInicio(fechaActualComoDato);
      setFechaFin(fechaActualComoDato);
      cambioFecha();
   };
   const eventosSemanal = () => {
      setTextoFecha("Esta Semana");
      var fechaActual = new Date();
      var dia = fechaActual.getDate();
      var mes = fechaActual.getMonth() + 1;
      var año = fechaActual.getFullYear();
      if (mes < 10) {
         mes = `0${mes}`;
      }
      if (dia < 10) {
         dia = `0${dia}`;
      }
      var fechaActualComoDato = año + "-" + mes + "-" + dia;

      var fechaVariable = new Date();
      var diaSemana = fechaVariable.getDay();
      var diasFaltantes = 7 - diaSemana;
      fechaVariable.setDate(fechaActual.getDate() + diasFaltantes);
      var uDia = fechaVariable.getDate();
      var uDiaMes = fechaVariable.getMonth() + 1;
      var uDiaMesAnho = fechaVariable.getFullYear();
      if (uDiaMes < 10) {
         uDiaMes = `0${uDiaMes}`;
      }
      if (uDia < 10) {
         uDia = `0${uDia}`;
      }
      var fechaUltima = uDiaMesAnho + "-" + uDiaMes + "-" + uDia;
      setFechaInicio(fechaActualComoDato);
      setFechaFin(fechaUltima);
      cambioFecha();
   };

   const eventoMensual = () => {
      setTextoFecha("Este Mes");
      var fechaActual = new Date();
      var dia = fechaActual.getDate();
      var mes = fechaActual.getMonth() + 1;
      var año = fechaActual.getFullYear();
      if (mes < 10) {
         mes = `0${mes}`;
      }
      if (dia < 10) {
         dia = `0${dia}`;
      }
      var fechaActualComoDato = año + "-" + mes + "-" + dia;

      var fechaVariable = new Date();
      var ultimoDiaMes = new Date(
         fechaVariable.getFullYear(),
         fechaVariable.getMonth() + 1,
         0
      );
      var diaUltimoDiaMes = ultimoDiaMes.getDate();
      var mesUltimoDiaMes = ultimoDiaMes.getMonth() + 1;
      var añoUltimoDiaMes = ultimoDiaMes.getFullYear();
      if (mesUltimoDiaMes < 10) {
         mesUltimoDiaMes = `0${mesUltimoDiaMes}`;
      }

      var fechaUl =
         añoUltimoDiaMes + "-" + mesUltimoDiaMes + "-" + diaUltimoDiaMes;
      setFechaInicio(fechaActualComoDato);
      setFechaFin(fechaUl);
      cambioFecha();
   };

   const limpiarFechas = () => {
      setFechaBool(false);
      setTextoFecha("Fecha");
   };
   const openClose = () => {
      !inOpenModal ? openModal() : closeModal();
   };

   useEffect(() => {
      if (codigoEvento) {
         let filtrarxcodEvento = eventos.filter((eve) => {
            return eve.cod_concurso == codigoEvento;
         });
         setEventosshow(filtrarxcodEvento);
      } else {
         setEventosshow(eventos);
      }
   }, [codigoEvento]);
   const scrollTop = () => {
      window.scrollTo({
         top: posicionTitulo,
         behavior: "smooth", // Desplazamiento suave
      });
   };

   const nextPage = () => {
      if (lastIndex < eventos.length) {
         setCurrentPage(currentPage + 1);
      }
   };

   const prevPage = () => {
      if (currentPage > 1) {
         setCurrentPage(currentPage - 1);
      }
   };

   const handlePageChange = (event, value) => {
      setCurrentPage(value);
   };

   return (
      <div className="conten">
         <Helmet title="Calendario - Home" />
         <Header activ={false} />
         <Carrusel />
         <h1 ref={refTitle} className="titulo">
            CALENDARIO NACIONAL DE CONCURSOS Y EVENTOS <br /> DE MARINERA
         </h1>
         <h3 className="subtitulo">
            Este CALENDARIO contiene Ensayos, Coronaciones y CONCURSOS DE
            MARINERA del 2024. Día a día la información es corroborada y
            actualizada con el fin de ser una fuente dinámica y confiable del
            Perú y el mundo.
         </h3>

         <section className="filtros_conten">
            <div className="filtro-Tit">
               <p>Encuentra tu evento de marinera</p>
            </div>
            {tipos && (
               <div className="div1 movil">
                  <Select
                     isClearable
                     placeholder="Tipo de evento"
                     isSearchable={false}
                     options={tipos.map((tipo) => ({
                        label: tipo.nombre,
                        value: tipo.cod_tipo,
                     }))}
                     onChange={(options) =>
                        !options ? setTipoE("") : setTipoE(options.value)
                     }
                     theme={(theme) => ({
                        ...theme,
                        colors: {
                           ...theme.colors,
                           primary25: "#ffffff",
                           primary: "#ffffff;",
                        },
                     })}
                     styles={styless}
                  />
               </div>
            )}
            {departamentos && (
               <div className="selectRegion movil">
                  <Select
                     isClearable
                     placeholder="Región"
                     options={departamentos.map((dep) => ({
                        label: dep.nombre,
                        value: dep.cod,
                     }))}
                     onChange={(options) => {
                        if (!options) {
                           setCodDepartamento("");
                           refCiudad.current.clearValue();
                        } else {
                           setCodDepartamento(options.value);
                           refCiudad.current.clearValue();
                           console.log(
                              lugares.provincias.filter(
                                 (p) => p.department_id == options.value
                              )
                           );
                           setCiudades(
                              lugares.provincias.filter(
                                 (p) => p.department_id == options.value
                              )
                           );
                        }
                     }}
                     theme={(theme) => ({
                        ...theme,

                        colors: {
                           ...theme.colors,
                           primary25: "#ffffff",
                           primary: "#ffffff;",
                        },
                     })}
                     styles={styless}
                     // fontSize: window.innerWidth>800 ? "18px":"14px",
                  />
               </div>
            )}
            {ciudades && (
               <div className="div2 movil">
                  <Select
                     isClearable
                     placeholder="Provincia"
                     ref={refCiudad}
                     options={ciudades.map((ciudad) => ({
                        label: ciudad.name,
                        value: ciudad.id,
                     }))}
                     onChange={(options) =>
                        !options ? setCiudadE("") : setCiudadE(options.value)
                     }
                     theme={(theme) => ({
                        ...theme,
                        borderRadius: 5,
                        colors: {
                           ...theme.colors,
                           primary25: "#ffffff",
                           primary: "#ffffff;",
                        },
                     })}
                     styles={styless}
                     isDisabled={codDepartamneto ? false : true}
                  />
               </div>
            )}

            {eventos && (
               <div className="div5 movil">
                  <TextField
                     size="small"
                     className="tf"
                     id="outlined-basic"
                     label="Nombre del evento"
                     variant="outlined"
                     value={busqueda}
                     sx={styleText}
                     onChange={(e) => setBusqueda(e.target.value)}
                  />
               </div>
            )}

            <div className="div3 movilFechaa">
               <button
                  className="but-fecha"
                  style={{ color: "#b6b4b4" }}
                  onClick={openClose}
               >
                  {textoFecha}
               </button>
               <div className="contenClear">
                  <div className="contenClear-x">
                     {fechaBool && (
                        <i
                           onClick={limpiarFechas}
                           className="fa-regular fa-circle-xmark"
                        ></i>
                     )}
                  </div>
               </div>
               <ModalFecha isOpen={inOpenModal} closeModal={closeModal}>
                  <div className="conten-Fechas">
                     <div className="conten-Fechas-Indi">
                        <p onClick={eventosHoy}>Hoy</p>
                        <p onClick={eventosSemanal}>Esta semana</p>
                        <p onClick={eventoMensual}>Este mes</p>
                     </div>
                     <div className="content-inf">
                        <TextField
                           type="date"
                           min={new Date().toISOString().split("T")[0]}
                           value={fechaInicio}
                           onChange={fechaInicial}
                           size="small"
                           style={{
                              width:
                                 window.innerWidth < 800 ? "140px" : "160px",
                           }}
                        ></TextField>
                        <TextField
                           type="date"
                           min={fechaInicio}
                           value={fechaFin}
                           onChange={fechaFinal}
                           size="small"
                           style={{
                              width:
                                 window.innerWidth < 800 ? "140px" : "160px",
                           }}
                        />
                     </div>
                     <div className="conten-botones">
                        <button onClick={cambioFecha}>Aplicar</button>
                     </div>
                  </div>
               </ModalFecha>
            </div>
            {/* <div className="div4">
          <p onClick={eliminarFiltro}>Limpiar</p>
        </div> */}
         </section>
         <div className="conten-contenCards">
            <Box sx={{ flexGrow: 1 }}>
               <Grid container spacing={2}>
                  {currentItems.map((evento, i) => (
                     <Grid item xs={6} sm={6} md={4} lg={3} key={i}>
                        <Card
                           evento={evento}
                           ciudades={ciudades}
                           key={i}
                        ></Card>
                     </Grid>
                  ))}
               </Grid>
            </Box>
         </div>
         <div onClick={scrollTop} className="swipe">
            <i className="fa-solid fa-angles-up"></i>
         </div>
         <div className="contentButtons">
            <CustomPagination
               count={Math.ceil(eventosshow.length / itemsPerPage)}
               page={currentPage}
               onChange={handlePageChange}
               color="primary"
            />
         </div>

         <Footer />
      </div>
   );
};

export default ListaConcursoP;
