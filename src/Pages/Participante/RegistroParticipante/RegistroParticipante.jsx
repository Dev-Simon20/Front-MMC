import { useEffect, useRef, useState } from "react";
import { helphttp } from "../../../Helpers/helphttps";
import Categorias from "../../../Components/Categorias/Categorias";
import Modalidades from "../../../Components/Modalidades/Modalidades";
import RegistroIndi from "../../../Components/RegistroIndi/RegistroIndi";
import RegistroPareja from "../../../Components/RegistroPareja/RegistroPareja";
import FormContact from "../../../Components/formularioContacto/FormContact";
import FootReg from "../../../Components/foot_reg/FootReg";
import imgUrl from "./portada.jpg";
import logob from "../VerificacionRegistro/logob.png";

import "./RegistroPar.css";
import UploadImage from "../../../Components/UploadImage/UploadImage";
import { uploadFile } from "../../../firebase/config";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../HookPersonalizados/useForm";
import Select from "react-select";
import ModalRegister from "../../../Components/modalRegistrado/ModalRegister";
import { useModal } from "../../../HookPersonalizados/useModals";
import Loader from "../../../Components/Loader/Loader";
import ModalCategorias from "../../../Components/ModalCategorias/ModalCategorias";
import Cookies from "../../../Cookies";
import FuseCountdown from "../../../Components/FuseCountdown/FuseCountdown";
import { Checkbox } from "@mui/material";
import axios from "axios";
import Header from "../../../Components/Header/Header";
import { Helmet } from "react-helmet";
import Alert from "@mui/material/Alert";

const makeRequestWithTimeout = async (url) => {
   console.log("make");
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

function limpiar(cadena) {
   const sinEspacios = cadena.replace(/\s/g, "");
   const sinTildes = sinEspacios
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
   return sinTildes;
}
const validationForm = (form) => {
   let errors = {};
   let regexName = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/;
   // let regexdni=/^(?!0+$)\d+$/;
   let regexdni = /^(?!0+$)\d{1,16}$/;
   let regexnumber = /^(?!0+$)\d{1,9}$/;
   let regexfec = /^\d{1,4}[-/.]\d{1,2}[-/.]\d{1,4}$/;
   let regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   if (form.codModalidad == "") {
      errors.modali = "El campo 'Modalidad' es requerido";
   }
   if (form.codCategoria == "") {
      errors.cate = "El campo Categoria es requerido";
   }
   if (!form.nombre_1.trim()) {
      errors.nom_1 = "El campo 'Nombre' es requerido";
   } else if (!regexName.test(form.nombre_1.trim())) {
      errors.nom_1 = "El campo 'Nombre' solo acepta letras";
   }
   if (!form.apellido_1.trim()) {
      errors.ape_1 = "El campo 'Apellido' es requerido";
   } else if (!regexName.test(form.apellido_1.trim())) {
      errors.ape_1 = "El campo 'Apellido' solo acepta letras";
   }

   // if (!form.ciudad_1.trim()) {
   //    errors.ciu_1 = "El campo 'Ciudad' es requerido";
   // } else if (!regexName.test(form.ciudad_1.trim())) {
   //    errors.ciu_1 = "El campo 'Ciudad' solo acepta letras";
   // }

   if (form.dni_1 == "") {
      errors.dn_1 = "El campo 'DNI' es requerido";
   } else if (!regexdni.test(form.dni_1)) {
      errors.dn_1 = "El campo 'DNI' solo acepta números y máximo 16 caracteres";
   }

   if (form.num_1 == "") {
      errors.nu_1 = "El campo 'Número de Celular' es requerido";
   } else if (!regexnumber.test(form.num_1)) {
      errors.nu_1 =
         "El campo 'Número de Celular' solo acepta numeros y máximo 9 caracteres";
   }
   // if (!form.academia_1.trim()) {
   //    errors.aca_1 = "El campo 'Academia' es requerido";
   // } else if (!regexName.test(form.academia_1.trim())) {
   //    errors.aca_1 = "El campo 'Academia' solo acepta letras";
   // }
   if (!form.nombre_2.trim()) {
      errors.nom_2 = "El campo 'Nombre' es requerido";
   } else if (!regexName.test(form.nombre_2.trim())) {
      errors.nom_2 = "El campo 'Nombre' solo acepta letras";
   }

   if (!form.apellido_2.trim()) {
      errors.ape_2 = "El campo 'Apellido' es requerido";
   } else if (!regexName.test(form.apellido_2.trim())) {
      errors.ape_2 = "El campo 'Apellido' solo acepta letras";
   }

   // if (!form.ciudad_2.trim()) {
   //    errors.ciu_2 = "El campo 'Ciudad' es requerido";
   // } else if (!regexName.test(form.ciudad_2.trim())) {
   //    errors.ciu_2 = "El campo 'Ciudad' solo acepta letras";
   // }

   if (form.dni_2 == "") {
      errors.dn_2 = "El campo 'DNI' es requerido";
   } else if (!regexdni.test(form.dni_2)) {
      errors.dn_2 = "El campo 'DNI' solo acepta números y máximo 16 caracteres";
   }

   if (form.num_2 == "") {
      errors.nu_2 = "El campo 'Número de Celular' es requerido";
   } else if (!regexnumber.test(form.num_2)) {
      errors.nu_2 =
         "El campo 'Número de Celular' solo acepta números y máximo 9 caracteres";
   }
   // if (!form.academia_2.trim()) {
   //    errors.aca_2 = "El campo 'Academia' es requerido";
   // } else if (!regexName.test(form.academia_2.trim())) {
   //    errors.aca_2 = "El campo 'Academia' solo acepta letras";
   // }

   if (!regexfec.test(form.fecha_nac_1)) {
      errors.fc_1 = "El campo 'Fecha' es requerido";
   }
   if (!regexfec.test(form.fecha_nac_2)) {
      errors.fc_2 = "El campo 'Fecha' es requerido";
   }

   if (!form.nombreContacto.trim()) {
      errors.nom_c = "El campo 'Nombre' es requerido";
   } else if (!regexName.test(form.nombreContacto.trim())) {
      errors.nom_c = "El campo 'Nombres' solo acepta letras";
   }

   if (form.numeroContacto == "") {
      errors.nu_c = "El campo 'Número de Contacto' es requerido";
   } else if (!regexnumber.test(form.numeroContacto)) {
      errors.nu_c =
         "El campo 'Número de Contacto' solo acepta números y máximo 9 caracteres";
   }
   if (!form.correoContacto.trim()) {
      errors.co_c = "El campo 'Correo' es requerido";
   } else if (!regexCorreo.test(form.correoContacto.trim())) {
      errors.co_c = "Ingrese un correo Valido";
   }

   return errors;
};
const validationIndividual = (form) => {
   let errors = {};
   let regexName = /^[a-zA-Z\s]+$/;
   // let regexdni=/^(?!0+$)\d+$/;
   let regexdni = /^(?!0+$)\d{1,16}$/;
   let regexnumber = /^(?!0+$)\d{1,9}$/;
   let regexfec = /^\d{1,4}[-/.]\d{1,2}[-/.]\d{1,4}$/;
   let regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   if (form.codModalidad == "") {
      errors.modali = "El campo 'Modalidad' es requerido";
   }
   if (form.codCategoria == "") {
      errors.cate = "El campo Categoría es requerido";
   }
   if (!form.nombre_1.trim()) {
      errors.nom_1 = "El campo 'Nombre' es requerido";
   } else if (!regexName.test(form.nombre_1.trim())) {
      errors.nom_1 = "El campo 'Nombre' solo acepta letras";
   }

   if (!form.apellido_1.trim()) {
      errors.ape_1 = "El campo 'Apellido' es requerido";
   } else if (!regexName.test(form.apellido_1.trim())) {
      errors.ape_1 = "El campo 'Apellido' solo acepta letras";
   }

   // if (!form.ciudad_1.trim()) {
   //    errors.ciu_1 = "El campo 'Ciudad' es requerido";
   // } else if (!regexName.test(form.ciudad_1.trim())) {
   //    errors.ciu_1 = "El campo 'Ciudad' solo acepta letras";
   // }

   if (form.dni_1 == "") {
      errors.dn_1 = "El campo 'DNI' es requerido";
   } else if (!regexdni.test(form.dni_1)) {
      errors.dn_1 = "El campo 'DNI' solo acepta números y máximo 16 caracteres";
   }

   if (form.num_1 == "") {
      errors.nu_1 = "El campo 'Número de Celular' es requerido";
   } else if (!regexnumber.test(form.num_1)) {
      errors.nu_1 =
         "El campo 'Número de Celular' solo acepta numeros y máximo 9 caracteres";
   }
   // if (!form.academia_1.trim()) {
   //    errors.aca_1 = "El campo 'Academia' es requerido";
   // } else if (!regexName.test(form.academia_1.trim())) {
   //    errors.aca_1 = "El campo 'Academia' solo acepta letras";
   // }

   if (!form.nombreContacto.trim()) {
      errors.nom_c = "El campo 'Nombre' es requerido";
   } else if (!regexName.test(form.nombreContacto.trim())) {
      errors.nom_c = "El campo 'Nombre' solo acepta letras";
   }

   if (form.numeroContacto == "") {
      errors.nu_c = "El campo 'Número de Contacto' es requerido";
   } else if (!regexnumber.test(form.numeroContacto)) {
      errors.nu_c =
         "El campo 'Número de Contacto' solo acepta números y máximo 9 caracteres";
   }
   if (!form.correoContacto.trim()) {
      errors.co_c = "El campo 'Correo' es requerido";
   } else if (!regexCorreo.test(form.correoContacto.trim())) {
      errors.co_c = "Ingrese un Correo Valido";
   }
   return errors;
};
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
      paddingLeft: "65px",
      fontSize: window.innerWidth < 700 ? "14px" : "17px",
   }),
   control: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: "#f5f5f5",
      border: "1px solid #f5f5f5",
      "&:hover": {
         border: "1px solid #f5f5f5",
      },
   }),
   placeholder: (styles) => {
      return {
         ...styles,
         color: "#492558",
         fontFamily: "sansita",
         fontSize: window.innerWidth < 700 ? "14px" : "19px",
         fontWeight: "bold",
         textAlign: "start",
         marginLeft: "20px",
      };
   },
   menu: (styles) => ({
      ...styles,
      zIndex: 500,
   }),
};

function ordenarPorLetraInicial(a, b) {
   const palabrasOrden = [
      "ser",
      "ind",
      "nov",
      "nac",
      "cam",
      "inc",
      "la",
      "fam",
   ];

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

const RegistroPar = ({ slugy }) => {
   const navigate = useNavigate();
   const slug = slugy;
   const formDefault = {
      voucher: "",
      tipoRegistro: "",
      nombreContacto: "",
      numeroContacto: "",
      correoContacto: "",
      codModalidad: "",
      codCategoria: "",
      codConcurso: "",
      cod_estado: "1",
      nombre_1: "",
      apellido_1: "",
      ciudad_1: "lima",
      fecha_nac_1: "",
      dni_1: "",
      num_1: "123",
      academia_1: "",
      codRol_1: "1",
      codGenero_1: "1",
      nombre_2: "",
      apellido_2: "",
      ciudad_2: "lima",
      dni_2: "",
      fecha_nac_2: "",
      num_2: "123",
      academia_2: "",
      codRol_2: "1",
      codGenero_2: "2",
      slug: "",
   };

   const {
      formu,
      errors,
      loading,
      response,
      handChange,
      handBlur,
      handSubmit,
      setFormu,
      Bluroptions,
      setErrors,
   } = useForm(formDefault, validationForm);
   const api = helphttp();
   const url = `https://server.eventosdemarinera.com/userpar/dataevento/${slug}`;
   const url_2 = `https://server.eventosdemarinera.com/userpar/categoriasConcurso/${145}`;
   const url_3 = `https://server.eventosdemarinera.com/userpar/registrarse/`;

   const [mostrarCajaContacto, setMostrarCajaContacto] = useState(false);
   const [tipo, setTipo] = useState("");
   const [mostrarElemento, setMostrarElemento] = useState(false);
   const [imagAgredada, setimagenAgregada] = useState("");
   const [mostrarCaja, setMostrarCaja] = useState(false);
   // const [modSelec, setModSelec] = useState("");
   const [modalidades, setModalidades] = useState([]);
   const [categorias, setCategoria] = useState([]);
   const [concurso, setConcurso] = useState("");
   const [form, setForm] = useState(formDefault);
   const mostrarform = useRef(null);
   const showDrag = useRef(null);
   const [file, setFile] = useState(null);
   const [nombre, setNombre] = useState("");
   const [isOpenModal, openModal, closeModal] = useModal(false);
   const [cargando, setCargando] = useState(false);
   const [verCat, setVerCat] = useState(false);
   const [isChecked, setIsChecked] = useState(false);
   const refModalidad = useRef();
   const refCategoria = useRef();
   const [hidenForm, setHidenForm] = useState(false);
   const [excepciones, setExcepciones] = useState([]);
   const fechaActual = new Date();
   const [alertSucces, setAlertSuces] = useState(false);

   const copiarEnlace = () => {
      setAlertSuces(true);
      setTimeout(() => {
         setAlertSuces(false);
      }, 6000);
   };

   //Llamada a la api
   //Obtener los datos del cocnurso y de las modalidades

   const scrollTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "auto", // Desplazamiento suave
      });
   };
   useEffect(() => {
      const obtenerData = async () => {
         try {
            const data = await makeRequestWithTimeout(url);
            let url_Categorias = `https://server.eventosdemarinera.com/userpar/categoriasConcurso/${data[0].cod_concurso}`;
            const dataCategorias = await api.get(url_Categorias);
            dataCategorias.sort((a, b) => b.año_min - a.año_min);
            setCategoria(dataCategorias);
            const dataEvento = data[0];
            let mod = data[1];
            setConcurso(dataEvento);
            let factual = new Date();
            if (factual > new Date(dataEvento.fin_evento)) {
               setHidenForm(true);
            }
            console.log("sdasdasd");
            if (dataEvento.slug == "pasion-trujillana-lima-2024") {
               mod = mod.filter(
                  (mod) => mod.cod_modalidad != 7 && mod.cod_modalidad != 8 && mod.cod_modalidad != 5 && mod.cod_modalidad != 6 && mod.cod_modalidad != 1
               );
            }
            mod = mod.sort(ordenarPorLetraInicial);
            setModalidades(mod);
            setExcepciones(dataEvento.excepciones.catxmod);
            setFormu((formu) => ({
               ...formu,
               nombreCon: dataEvento.nombre_concurso,
               lugar: dataEvento.lugar,
               correo: dataEvento.correo,
               slug: dataEvento.slug,
               codConcurso: dataEvento.cod_concurso.toString(),
            }));
         } catch (error) {
            console.log(error.message);
         }
      };
      obtenerData();
   }, []);

   // Guardamos los datos de la modalidad
   const guardarDatom = (options) => {
      if (!options) {
         setFormu((formu) => ({
            ...formu,
            codModalidad: "",
            tipoRegistro: "",
            nombreMod: "",
         }));
         setMostrarElemento(false);
      } else {
         for (const modalidad of modalidades) {
            //1=pareja    2=individual
            if (modalidad.cod_modalidad == options.value) {
               if (modalidad.tipo == "Pareja") {
                  setFormu((formu) => ({
                     ...formu,
                     tipoRegistro: 1,
                     codModalidad: options.value.toString(),
                     nombreMod: options.label,
                  }));
               } else {
                  setFormu((formu) => ({
                     ...formu,
                     tipoRegistro: 2,
                     codModalidad: options.value.toString(),
                     nombreMod: options.label,
                  }));
               }
               break;
            }
         }
         if (options.value == 33) copiarEnlace();
      }
   };

   useEffect(() => {
      refCategoria.current.clearValue();
      if (formu.codModalidad) {
         let f = excepciones.filter((exp) => exp.cod_mod == formu.codModalidad);
         setCategoria(f[0].categorias);
      }
   }, [formu.codModalidad]);

   const guardarDatoc = (options) => {
      !options
         ? setFormu((formu) => ({ ...formu, codCategoria: "", nombreCat: "" }))
         : setFormu((formu) => ({
              ...formu,
              codCategoria: `${options.value}`,
              nombreCat: `${options.label}`,
           }));
   };

   const enviarDatos = async () => {
      if (formu.tipoRegistro == 1) {
         setErrors(validationForm(formu));
         const newErrors = validationForm(formu);
         if (Object.keys(newErrors).length === 0) {
            try {
               if (file && isChecked) {
                  setCargando(true);
                  const urlResult = await uploadFile(file);
                  setFormu((formu) => ({ ...formu, voucher: urlResult }));
               } else {
                  alert("Complete los Datos");
               }
            } catch (error) {
               console.log(error.message);
            }
         }
      } else if (formu.tipoRegistro == 2) {
         setErrors(validationIndividual(formu));
         const newErrors = validationIndividual(formu);
         if (Object.keys(newErrors).length === 0) {
            try {
               if (file && isChecked) {
                  setCargando(true);
                  const urlResult = await uploadFile(file);
                  setFormu((formu) => ({ ...formu, voucher: urlResult }));
               } else {
                  alert("Complete los Datos");
               }
            } catch (error) {
               console.log(error.message);
            }
         }
      }
   };

   useEffect(() => {
      const senData = async () => {
         console.log("entradno al sen data");
         try {
            const consul = await axios.post(url_3, formu);
            console.log("formualrio envuado: ", formu);
            console.log(consul);
            setFormu(() => ({
               ...formDefault,
               nombreCon: concurso.nombre_concurso,
               lugar: concurso.lugar,
               correo: concurso.correo,
               slug: concurso.slug,
               codConcurso: concurso.cod_concurso.toString(),
            }));
            refCategoria.current.clearValue();
            refModalidad.current.clearValue();
            setFile("");
            setNombre("");
            setMostrarElemento(false);
            setMostrarCaja(false);
            setMostrarCajaContacto(false);
            setIsChecked(false);
            setCargando(false);
            // if (consul.data != "Se registro correctamente al participante") {
            //    throw new Error("Registro fallido");
            // }
            openModal();
         } catch (error) {
            setCargando(false);
            console.log(error);
         }
      };
      if (formu.voucher.length >= 10) {
         senData();
      }
   }, [formu.voucher]);

   const mostrarFormulario = () => {
      if (formu.codCategoria && formu.codModalidad) {
         setMostrarElemento(!mostrarElemento);
      }
   };

   const showVoucher = () => {
      setMostrarCaja(!mostrarCaja);
   };
   const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
   };

   return (
      <div className="registro-main">
         <Helmet title="Calendario - Registro participante" />

         {/* <Header activ={true} slug={slug} /> */}
         {alertSucces && (
            <div id="alertCampeon">
               <Alert
                  variant="outlined"
                  className="alertas"
                  style={{
                     width: "100%",
                     borderRadius: "12px",
                     display: "flex",
                     alignItems: "center",
                  }}
                  severity="info"
               >
                  ¡Importante! Solo podrán participar parejas campeones de la
                  modalidad nacional 2024 y años anteriores.
               </Alert>
            </div>
         )}
         {!hidenForm && (
            <>
               <div className="contadorDown">
                  {concurso.fin_evento ? (
                     <p>Las inscripciones finalizan en</p>
                  ) : (
                     <h2>Cargando...</h2>
                  )}
                  {concurso.fin_evento && (
                     <FuseCountdown endDate={concurso.fin_evento} />
                  )}
               </div>
               <section>
                  <button onClick={() => setVerCat(true)} className="ShowCateg">
                     Verifica tu Categoría
                  </button>
                  {verCat && (
                     <ModalCategorias
                        setVerCat={setVerCat}
                        categorias={categorias}
                     />
                  )}
               </section>
               <section className="opt">
                  <div className="opt_mod">
                     <Select
                        isClearable
                        isSearchable={false}
                        ref={refModalidad}
                        placeholder="1- Seleccione una modalidad"
                        options={modalidades.map((mod) => ({
                           label: mod.nombre_mod,
                           value: mod.cod_modalidad,
                        }))}
                        onChange={(options) => guardarDatom(options)}
                        onBlur={Bluroptions}
                        theme={(theme) => ({
                           ...theme,
                           borderRadius: 15,
                           colors: {
                              ...theme.colors,
                              primary25: "#ffffff",
                              primary: "#ffffff;",
                           },
                        })}
                        styles={estilos}
                     />
                  </div>
                  {errors.modali && (
                     <p className="showerror">{errors.modali}</p>
                  )}

                  <div className="opt_cat">
                     <Select
                        isClearable
                        isSearchable={false}
                        ref={refCategoria}
                        placeholder="2- Seleccione una Categoría"
                        options={categorias.map((cat) => ({
                           label: cat.nombre_cat,
                           value: cat.cod_categoria,
                        }))}
                        onChange={(options) => guardarDatoc(options)}
                        onBlur={Bluroptions}
                        theme={(theme) => ({
                           ...theme,
                           borderRadius: 15,
                           colors: {
                              ...theme.colors,
                              primary25: "#ffffff",
                              primary: "#ffffff;",
                           },
                        })}
                        styles={estilos}
                     />
                  </div>
                  {errors.cate && <p className="showerror">{errors.cate}</p>}
               </section>

               <section className="datos">
                  <div onClick={mostrarFormulario} className="datos_head">
                     <h3>3- Datos del participante</h3>
                     <i
                        onClick={(e) => {
                           e.stopPropagation();
                           mostrarFormulario();
                        }}
                        className="fa-solid fa-angle-down"
                     ></i>
                  </div>
                  <article
                     ref={mostrarform}
                     id="datos-body"
                     style={{ maxHeight: formu.tipoRegistro == "2" && "410px" }}
                     className={mostrarElemento ? "mostrarFormConcursante" : ""}
                  >
                     {formu.tipoRegistro == 1 && (
                        <RegistroPareja
                           handChange={handChange}
                           handBlur={handBlur}
                           forml={formu}
                           errors={errors}
                        />
                     )}
                     {formu.tipoRegistro == 2 && (
                        <RegistroIndi
                           handChange={handChange}
                           handBlur={handBlur}
                           formu={formu}
                           errors={errors}
                        />
                     )}
                  </article>
               </section>

               <FormContact
                  handChange={handChange}
                  handBlur={handBlur}
                  forml={formu}
                  errors={errors}
                  mostrarCajaContacto={mostrarCajaContacto}
                  setMostrarCajaContacto={setMostrarCajaContacto}
               ></FormContact>
               <section className="voucher">
                  <div
                     onClick={showVoucher}
                     style={{ cursor: "pointer" }}
                     className="voucher_head"
                  >
                     <h3 style={{ cursor: "pointer" }}>
                        5- Adjunte la Imagen de su Voucher
                     </h3>
                     <i
                        onClick={(e) => {
                           e.stopPropagation();
                           showVoucher();
                        }}
                        className="fa-solid fa-angle-down"
                     ></i>
                  </div>
                  <article
                     ref={showDrag}
                     id="div-image"
                     className={mostrarCaja ? "mostrarCajaImagen" : ""}
                  >
                     <p className="met-tit">
                        <b>Métodos de Pago</b>
                     </p>
                     {concurso.slug == "pasion-trujillana-lima-2024" && (
                        <p className="met-tit">Sebastián Bramón Saavedra</p>
                     )}
                     {modalidades &&
                        modalidades.map(
                           (mod, i) =>
                              formu.codModalidad == mod.cod_modalidad && (
                                 <p className="prec" key={i}>
                                    EL precio por la participación es de S/{" "}
                                    {mod.precio}
                                 </p>
                              )
                        )}
                     <div className="conten-Cuentas">
                        <p id="texto-app">
                           <b>1. APLICACIONES</b>
                        </p>
                        {concurso.slug == "pasion-trujillana-lima-2024" && (
                           <p className="Cuentas-txt">
                              Yape o Plin : +51 949 144 914
                           </p>
                        )}
                     </div>{" "}
                     <br />
                     <UploadImage
                        file={file}
                        setFile={setFile}
                        nombre={nombre}
                        setNombre={setNombre}
                     />
                  </article>

                  {!file && (
                     <p style={{ alignSelf: "start" }} className="showerror">
                        * Adjunte la imagen del Voucher
                     </p>
                  )}
               </section>
               <div className="datosVer">
                  <div>
                     <Checkbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                     />
                     <p>
                        Estoy de acuerdo en que los datos ingresados son
                        verídicos
                     </p>
                  </div>
                  {!isChecked && (
                     <p
                        style={{ alignSelf: "start" }}
                        className="showerror casilla"
                     >
                        * Marque el Casillero
                     </p>
                  )}
               </div>

               <div className="div-reg" onClick={enviarDatos}>
                  <i className="fa-solid fa-user-plus"></i> <p>REGISTRARSE</p>
               </div>
            </>
         )}
         <ModalRegister
            isOpen={isOpenModal}
            closeModal={closeModal}
            nombre_concurso={concurso.nombre_concurso}
         ></ModalRegister>
         {cargando && <Loader />}

         {hidenForm && (
            <>
               <section
                  style={{
                     width: "80%",
                     display: "flex",
                     flexDirection: "column",
                     rowGap: "20px",
                     fontFamily: "sansita",
                     color: "#FF1F4A",
                  }}
               >
                  <h2 className="insFin">Las inscripciones han finalizado</h2>
               </section>
            </>
         )}
      </div>
   );
};

export default RegistroPar;
