import img from "./preguntas.jpg";
import "./preguntas.css";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { useEffect, useState } from "react";
const Preguntas = () => {
    

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "auto", // Desplazamiento suave
         });
    },[])
   const [activar, setActivar] = useState(1);

    const handleClick=(num)=>{
           if(num==activar){
                setActivar(0)
           }
            else{
                setActivar(num)
            }
    }
   return (
      <div className="conten_preguntas">
         <Header activ={false}/>
         <img className="port_preguntas" src={img} alt="" />

         <div className="textos_preguntas">
            <p className="question" style={{color:activar == 1 &&'#e7294f'}} onClick={() => handleClick(1)}>
               ¿SOMOS UNA ACADEMIA?
            </p>
            {activar == 1 && (
               <p className="respuesta">
                  No. Somos un medio digital que difunde la marinera norteña,
                  puedes encontrar más información en la sección NOSOTROS.
               </p>
            )}

            <p className="question" style={{color:activar == 2 &&'#e7294f'}}  onClick={() => handleClick(2)}>
               ¿PUEDEN HACER UNA ENTREVISTA SOBRE LOS PRODUCTOS O SERVICIOS QUE
               BRINDO?
            </p>
            {activar == 2 && (
               <p className="respuesta">
                  Si deseas comunicarte con nosotros para tener alguna
                  entrevista sobre productos de marinera o relacionados con la
                  marinera norteña entra a la sección CONTACTANOS.
               </p>
            )}

            <p className="question" style={{color:activar == 3 &&'#e7294f'}}  onClick={() => handleClick(3)}>
               ¿CÓMO INSCRIBO MI EVENTO EN SU CALENDARIO?
            </p>
            {activar == 3 && (
               <p className="respuesta">
                  Si deseas que tu evento aparezca en el calendario de
                  Mimarinera.com, solo tienes que entrar a este formulario y
                  REGISTRAR TU EVENTO. El registro es GRATIS.
               </p>
            )}

            <p className="question" style={{color:activar == 4 &&'#e7294f'}}  onClick={() => handleClick(4)}>
               ¿DÓNDE PUEDO ENCONTRAR LOS EVENTOS DE MARINERA?
            </p>
            {activar == 4 && (
               <p className="respuesta">
                  Todos los eventos de Marinera que desees encontrar lo tenemos
                  en la sección de CALENDARIO.
               </p>
            )}

            <p className="question" style={{color:activar == 5 &&'#e7294f'}}  onClick={() => handleClick(5)}>
               ¿QUÉ ACADEMIAS ESTÁN EN LA PÁGINA WEB?
            </p>
            {activar == 5 && (
               <p className="respuesta">
                  Las Academias asociadas a Mimarinera.com podrás verlas en la
                  SECCIÓN DE ACADEMIAS .Por el momento contamos con todas las
                  academias que son asociadas a Mimarinera.com .Si deseas
                  volverte SOCIO y tener una vitrina virtual en MIMARINERA.COM ,
                  ESCRÍBENOS . Eso te dará la oportunidad de que llegues a más
                  personas y te escriban directamente a tu Vitrina Virtual.
               </p>
            )}

            <p className="question" style={{color:activar == 6 &&'#e7294f'}}  onClick={() => handleClick(6)}>
               ¿PUEDO INSCRIBIR MI ACADEMIA SI ESTA EN PROVINCIA?
            </p>
            {activar == 6 && (
               <p className="respuesta">Si, escríbenos para ayudarte AQUÍ</p>
            )}

            <p className="question"style={{color:activar == 7 &&'#e7294f'}}  onClick={() => handleClick(7)}>
               ¿DÓNDE ENCUENTRO LOS TÉRMINOS Y CONDICIONES?
            </p>
            {activar == 7 && (
               <p className="respuesta">
                  <a href="#/terminos">Te dejamos aquí el enlace a los TERMINOS Y CONDICIONES.</a>
               </p>
            )}

            <p className="question" style={{color:activar == 8 &&'#e7294f'}}  onClick={() => handleClick(8)}>
               ¿SI NO TENGO PÁGINA WEB IGUAL PUEDO INSCRIBIR A MI ACADEMIA?
            </p>
            {activar == 8 && (
               <p className="respuesta">
                  Claro que sí , no es necesario contar con una página web para
                  que creemos tu vitrina Virtual y aparezcas en la Sección de
                  Academias. Cualquier duda o consulta puedes ESCRIBIRNOS
               </p>
            )}

            <p className="question" style={{color:activar == 9 &&'#e7294f'}}  onClick={() => handleClick(9)}>
               ¿CÓMO PUEDO COLOCAR MI PUBLICIDAD EN SU PÁGINA WEB?
            </p>
            {activar == 9 && (
               <p className="respuesta">
                  Como medio digital ofrecemos diversas formas de publicidad,
                  para poder colocar su publicidad puede entrar a CONTACTANOS.
                  Nuestro personal estará a atento a aclarar tus dudas.
               </p>
            )}
         </div>

         <Footer />
      </div>
   );
};
export default Preguntas;
