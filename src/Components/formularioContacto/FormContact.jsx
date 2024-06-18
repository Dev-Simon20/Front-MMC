import "./cont.css";
import { useState } from "react";
import { TextField } from "@mui/material";
const formContact = ({
   handChange,
   handBlur,
   forml,
   errors,
   mostrarCajaContacto,
   setMostrarCajaContacto,
}) => {
   const formu = forml;
   const handleClick = () => {
      setMostrarCajaContacto(!mostrarCajaContacto);
   };
   return (
      <section className="contacto">
         <div onClick={handleClick} className="contacto_head">
            <h3>4- ¿A quién enviamos los datos de tu registro?</h3>
            <i
               onClick={(e) => {
                  e.stopPropagation();
                  handleClick();
               }}
               className="fa-solid fa-angle-down"
            ></i>
         </div>

         <div
            id="contacto_body"
            className={mostrarCajaContacto ? "mostrar" : ""}
         >
            <p className="textCon">
               Se enviará un correo electrónico a esta persona con la
               información relevante a tu registro
            </p>
            <div className="conten-inputs-contac">
               <div className="inp">
                  <TextField
                     label="Nombres completos"
                     onChange={handChange}
                     name="nombreContacto"
                     value={formu.nombreContacto}
                     size="small"
                     onBlur={handBlur}
                     sx={{
                        '& .MuiOutlinedInput-root': {
                           borderRadius: '18px',
                        }
                     }}
                  />
                  {errors.nom_c && (
                     <p className="showerror"> {errors.nom_c} </p>
                  )}
               </div>
               <div className="inp">
                  <TextField
                     label="Número Telefónico"
                     onChange={handChange}
                     name="numeroContacto"
                     value={formu.numeroContacto}
                     size="small"
                     onBlur={handBlur}
                     sx={{
                        '& .MuiOutlinedInput-root': {
                           borderRadius: '18px',
                        }
                     }}
                  />
                  {errors.nu_c && <p className="showerror"> {errors.nu_c} </p>}
               </div>
               <div className="inp">
                  <TextField
                     label="Correo Electrónico"
                     onChange={handChange}
                     name="correoContacto"
                     value={formu.correoContacto}
                     size="small"
                     onBlur={handBlur}
                     sx={{
                        '& .MuiOutlinedInput-root': {
                           borderRadius: '18px',
                        }
                     }}
                  />
                  {errors.co_c && <p className="showerror"> {errors.co_c} </p>}
               </div>
            </div>
         </div>
      </section>
   );
};

export default formContact;
