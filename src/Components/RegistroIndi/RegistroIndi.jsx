import "./RegistroIndi.css";
import { format, parse } from "date-fns";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import { useState } from "react";

const registroIndi = ({ handChange, handBlur, formu, errors }) => {
   // const handChange=(e)=>{
   //      setForm(prevform=>({...prevform,[e.target.name]:e.target.value}));

   // }
   const bordersx = {
      "& .MuiOutlinedInput-root": {
         borderRadius: "18px",
      },
   };
   const [selectedDate, setSelectedDate] = useState(null);

   const handleDateChange = (originalDate) => {
      setSelectedDate(originalDate);

      const dateObject = new Date(originalDate);
      const year = dateObject.getFullYear();
      const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Los meses en JavaScript son 0-indexados
      const day = String(dateObject.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      
      let e = {
         target: {
            name: "fecha_nac_1",
            value: formattedDate,
         },
      };
      handBlur(e);
      console.log("Fecha seleccionada:", formattedDate);
   };
   return (
      <section className="registerindi">
         <article className="ri" id="rij">
            <p className="textgen">Datos del Participante</p>

            <div className="conenTextField">
               <TextField
                  label="Ingresa tus Nombres"
                  onChange={handChange}
                  name="nombre_1"
                  value={formu.nombre_1}
                  size="small"
                  onBlur={handBlur}
                  sx={bordersx}
               />
               {errors.nom_1 && <p className="showerror">{errors.nom_1}</p>}
            </div>
            <div className="conenTextField">
               <TextField
                  label="Imgresa tus Apellidos"
                  onChange={handChange}
                  name="apellido_1"
                  value={formu.apellido_1}
                  size="small"
                  onBlur={handBlur}
                  sx={bordersx}
               />
               {errors.ape_1 && <p className="showerror">{errors.ape_1}</p>}
            </div>

            <div className="conenTextField">
               <TextField
                  label="Ingresa tu DNI"
                  onChange={handChange}
                  name="dni_1"
                  value={formu.dni_1}
                  size="small"
                  onBlur={handBlur}
                  sx={bordersx}
               />
               {errors.dn_1 && <p className="showerror"> {errors.dn_1} </p>}
            </div>

            <div className="conenTextField">
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                     components={["DatePicker"]}
                     style={{ width: "100%" }}
                  >
                     <DatePicker
                        label="Ingresa tu Fecha de nacimiento"
                        value={selectedDate}
                        onChange={handleDateChange}
                        sx={{
                           width: "100%",
                           "& .MuiOutlinedInput-root": {
                              borderRadius: "16px",
                              height:'40px',
                           },
                        }}
                     />
                  </DemoContainer>
               </LocalizationProvider>
               {errors.fc_1 && <p className="showerror"> {errors.fc_1} </p>}
            </div>
            <div className="conenTextField">
               <TextField
                  label="Ingresa tu Academia"
                  onChange={handChange}
                  name="academia_1"
                  value={formu.academia_1}
                  size="small"
                  onBlur={handBlur}
                  sx={bordersx}
               />
               {errors.aca_1 && <p className="showerror"> {errors.aca_1} </p>}
            </div>
         </article>
      </section>
   );
};

export default registroIndi;

{
   /* <input */
}
// id="fecha_nac_1"
// type="text"
// className="inpDateP"
// name="fecha_nac_1"
// onBlur={(e) => {
//    handBlur(e);
//    e.target.type = "text";
// }}
// onFocus={(e) => (e.target.type = "date")}
// placeholder="Ingresa tu Fecha de Nacimiento"
// onChange={handChange}
// value={
//    document.activeElement ===
//       document.getElementById("fecha_nac_1") ||
//    !formu.fecha_nac_1
//       ? formu.fecha_nac_1
//       : format(
//            parse(formu.fecha_nac_1, "yyyy-MM-dd", new Date()),
//            "dd/MM/yyyy"
//         )
// }
// />
