import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { helphttp } from "../../Helpers/helphttps";
import ModalDatosPareja from "../ModalDatosPareja/ModalDatosParejad";
import { useModal } from "../../HookPersonalizados/useModals";
import "./TablaCon.css";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import Select from "react-select";
import logo from "./logo-bl.png"
import { useSelector } from "react-redux";
import { changeAuthOrg } from "../../store/estados/orgaAuth";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';

const TablaConcursantes = () => {
   const userOrg=useSelector((state)=>state.userOrg);
   const dispatch=useDispatch();
   const selectInputRef = useRef();
   const [isOpenModal, openModal, closeModal] = useModal(false);
   const navigate = useNavigate();

// Arreglos para la tabla
   const [concursantes, setConcursantes] = useState([]);
   const [showConcursantes, setShowConcursantes] = useState([]);

   const [seleccion, setSeleccion] = useState({});
   const [parEle, setParEle] = useState({});

// datos del evento o concurso
   const [evento, setEvento] = useState(false);


   const api = helphttp();
   const cod_evento = useParams().cod_concurso;
   const url = `https://server.eventosdemarinera.com/userorg/concurso/participantes/${cod_evento}`;
   const url_2 = `https://server.eventosdemarinera.com/useradmin/eliminarconcursante`;
   const datEvento = `https://server.eventosdemarinera.com/userorg/concursos/datos/${cod_evento}`;



   const [codCategoria, setCodCategoria] = useState("");
   const [codModalidad, setCodModalidad] = useState();
   const [activeSelects, setActiveSelects] = useState(false);
   const [concursanteXmodalidad,setconcursantesXmodalidad]=useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 5;
   const lastIndex = currentPage * itemsPerPage;
   const firstIndex = lastIndex - itemsPerPage;
   const currentItems = showConcursantes.slice(firstIndex, lastIndex);







   const nextPage = () => {
      if (lastIndex < concursantes.length) {
         setCurrentPage(currentPage + 1);
      }
   };

   const prevPage = () => {
      if (currentPage > 1) {
         setCurrentPage(currentPage - 1);
      }
   };
   useEffect(() => {
      const obtenerData = async () => {
         try {
            const data = await api.get(url);
            setConcursantes(data);
            const dataE = await api.get(datEvento);
            setEvento(dataE);
         } catch (error) {
            console.log("No se pudo ontener los datos");
         }
      };
      obtenerData();
   }, []);

  //  seteamos el concusante a eliminar
   const eliminarConcursante = (cod_participante) => {
      setParEle((parEle) => ({
         ...parEle,
         cod_participante: cod_participante,
      }));
   };


//  cuando el estado se seteo de participante tenga datos se procedera a elimanr
   useEffect(() => {
      const deleteConcursante = async () => {
         try {
            let opciones = {
               body: parEle,
               headers: { "content-type": "application/json" },
            };
            const consult = await api.del(url_2, opciones);
            const data = await api.get(url);
            setConcursantes(data);
            setShowConcursantes(data);
         } catch (error) {
            console.log(error.message);
         }
      };
      deleteConcursante();
   }, [parEle]);

  //  cuando se cierre el modal se recargaran los datos del participante
   useEffect(() => {
      const obtenerData = async () => {
         try {
            const data = await api.get(url);
            setConcursantes(data);
            setShowConcursantes(data);
         } catch (error) {
            console.log("No se pudo ontener los datos");
         }
      };
      !isOpenModal && obtenerData();
   }, [isOpenModal]);

   const nombreCateg = (cod) => {
      if (evento.length > 0) {
         for (const e of evento[1]) {
            if (e.cod_categoria === cod) {
               return e.nombre_cat;
            }
         }
      }
   };

   const seleccionarPa = (par) => {
      setSeleccion(par);
      openModal();
   };

   const exportar = () => {
    try {
      if (!codModalidad) throw new Error('No hay modalidad seleccionada')
      const doc = new jsPDF();
      // Encabezado de la tabla
      const titulo = 'Modalidad';
      const headers = [
         "Modalidad",
         "N°",
         "categoria",
         "Concursantes",
         "Contacto",
      ];
      const fontSize = 16;
    doc.text('Hacer dicamico titulo',80,10)
  // Agregar el título al PDF
      // Datos
      const rows = showConcursantes.map((con) => [
         con.nombre_mod,
         con.num_pareja,
         nombreCateg(con.Categorias_cod_categoria),
         `${con.nombre_1} ${con.apellido_1}\n ${con.nombre_2} ${con.apellido_2} `,
         con.numero_contacto,
      ]);
      doc.autoTable({ head: [headers], body: rows });
      doc.save("exported_file.pdf");
    } catch (error) {
       console.log(error.message);
    }
      
   };

   const modalidadSelected = (options) => {
      if (!options) {
         setCodModalidad("");
         setconcursantesXmodalidad(concursantes)
         setCurrentPage(1);
         setActiveSelects(false);
         selectInputRef.current.clearValue();
         setShowConcursantes(concursantes);

      } else {
         setCodModalidad(options.value);
         let con = concursantes.filter(
            (c) => c.Modalidades_cod_modalidad == options.value
         );
         setShowConcursantes(con);
         setconcursantesXmodalidad(con)
         setActiveSelects(true);
         setCurrentPage(1);
      }
   };


   const categoriaSelected=(options)=>{
      if (!options) {
         setCodCategoria("");
         if (codModalidad) {
            let con = concursantes.filter(
               (c) => c.Modalidades_cod_modalidad == codModalidad
            );
            setShowConcursantes(con);
         }
         else{
           setShowConcursantes(concursantes)
         }
         setCurrentPage(1);
      } else {
         setCodCategoria(options.value);
         let con = concursanteXmodalidad.filter(
            (c) => c.Categorias_cod_categoria == options.value
         );
         setShowConcursantes(con);
         setCurrentPage(1);
      }
   }
 
    const outlog=()=>{
     localStorage.setItem('token','');
     dispatch(changeAuthOrg(false))
    }

    const handleBack=()=>{
       navigate(`/HomeOrganizacion/${userOrg.cod_organizador}`)
    }

   return (
      <div className="conten-Table">
         <header className="conten-head-c">
           <img  className="conten-head-c-img" src={logo} alt="" />
           <div className="conten-head-c-text">
             <p>Total de Inscritos {concursantes.length}</p>
             {userOrg.role=='organizacion'&&<i onClick={outlog} className="fa-solid fa-arrow-right-from-bracket"></i>}
           </div>
         </header>
         {userOrg.role=='organizacion'&&<Button onClick={handleBack} style={{alignSelf:"start", margin:'20px 0 0 20px',color:'#492558', border:'1px solid #492558'}}  variant="outlined">Regresar</Button>}

         {/* <h2 className="subtitleTable">Lista de Participantes</h2> */}
         <h1 className="titleTable" style={{color:'#441f4a'}}>
            " {evento.length > 0 ? evento[0].nombre_concurso : "cargando......"} "
         </h1>
         <h2 className="subtitleTable2">{evento.length > 0 ? evento[0].lugar : "cargando......"}</h2>

         {evento && evento[2] && (
            <div className="conten-selec-mod">
              <Select
               isClearable
               isSearchable={false}
               placeholder="Seleccione una modalidad"
               options={evento[2].map((evento) => ({
                  label: evento.nombre_mod,
                  value: evento.cod_modalidad,
               }))}
               onChange={(options) => modalidadSelected(options)}
            />
            </div>
         )}
         <div className="exportPdf" onClick={exportar}>
         <i className="fa-regular fa-file-pdf"></i>           
           <p>Exportar a Pdf</p>
         </div>
         {evento && evento[2] && (
            <div className="conten-selec-mod"><Select
            ref={selectInputRef}
            isClearable
            placeholder="Seleccione una Categoría"
            options={evento[1].map((evento) => ({
               label: evento.nombre_cat,
               value: evento.cod_categoria,
            }))}
            onChange={(options) =>categoriaSelected(options) }
            isSearchable={false}
            isDisabled={!activeSelects}
         /></div>
         )}
         {concursantes == "" ? (
            <h2>Aun no hay participantes Registrados</h2>
         ) : (
            <section className="tablec">
               <article className="table-head">
                  <div className="tr-table">
                     <div className="h-num">
                        <p>N°</p>
                     </div>
                     <div className="h-nom">
                        <i className="div-i fa-regular fa-user"></i>
                        <p>Nombres y Apellidos</p>
                     </div>
                     <div className="h-cat">
                        <i className="div-i fa-solid fa-layer-group"></i>
                        <p>Categoria</p>
                     </div>
                     <div className="h-est">
                        <i className="div-i fa-solid fa-clipboard-check"></i>
                        <p>Estado</p>
                     </div>
                     <div className="h-Acc">
                        <i className="div-i fa-solid fa-gears"></i>
                        <p>Acciones</p>
                     </div>
                  </div>
               </article>
               <hr />
               <article className="table-body">
                  {currentItems.map((c, i) => (
                    <React.Fragment key={i}>
                     <div className="tr-table">
                        <div className="Npart">
                           <p>{c.num_pareja}</p>
                        </div>
                        <div className="nomPart">
                           <p>
                              {c.nombre_1} {c.apellido_1}
                           </p>
                           <p>
                              {c.nombre_2} {c.apellido_2}
                           </p>
                        </div>
                        <div className="nomCat">
                           {nombreCateg(c.Categorias_cod_categoria)}
                        </div>
                        <div className="estReg">
                           {c.Estados_cod_estado == 1
                              ? "Registrado"
                              : "Regularizado"}
                        </div>
                        <div className="accreg">
                        <i  className="edit-obj fa-regular fa-pen-to-square" onClick={()=>seleccionarPa(c)}></i>
                           {/* <button
                              className="editar-part"
                              onClick={() => seleccionarPa(c)}
                           >
                              Editar
                           </button> */}
                           <ModalDatosPareja
                              isOpen={isOpenModal}
                              closeModal={closeModal}
                              part={seleccion}
                           ></ModalDatosPareja>
                           <i className="delete-obj fa-regular fa-trash-can" onClick={()=>eliminarConcursante(c.cod_participante)}></i>
                           {/* <button
                              className="elimi-part"
                              onClick={() =>
                                 eliminarConcursante(c.cod_participante)
                              }
                           >
                              Eliminar
                           </button> */}
                        </div>
                     </div>
                     <hr />
                     </React.Fragment>
                  ))}
               </article>
               <section>
               <Button  onClick={prevPage} disabled={currentPage === 1} variant="outlined">Anterior</Button>
               <Button onClick={nextPage} disabled={lastIndex >= showConcursantes.length} variant="outlined">Siguiente</Button>
               </section>

            </section>
         )}
      </div>
   );
};

export default TablaConcursantes;
