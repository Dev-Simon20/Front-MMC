import "./RegistroPareja.css";
import { format, parse } from "date-fns";
import { TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
const RegistroPareja = ({ handChange, handBlur, forml, errors }) => {
   const [selectedDate, setSelectedDate] = useState(null);
   const [fechaDos, setFechaDos] = useState(null);
   const bordersx = {
      "& .MuiOutlinedInput-root": {
         borderRadius: "18px",
      },
   };
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
   const handleDateChangeDos = (originalDate) => {
      setFechaDos(originalDate);

      const dateObject = new Date(originalDate);
      const year = dateObject.getFullYear();
      const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Los meses en JavaScript son 0-indexados
      const day = String(dateObject.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      let e = {
         target: {
            name: "fecha_nac_2",
            value: formattedDate,
         },
      };
      handBlur(e);
      console.log("Fecha seleccionada:", formattedDate);
   };

   const formu = forml;
   return (
      //1=masculino 2=femenino
      <div className="regp">
         <div className="par1">
            <p className="textgen">Datos del Varón</p>
            <div  className="contenInputsRP">
               <TextField
                  label="Ingresa tus nombres"
                  onChange={handChange}
                  name="nombre_1"
                  value={formu.nombre_1}
                  size="small"
                  onBlur={handBlur}
                  sx={bordersx}
               />
               {errors.nom_1 && <p className="showerror">{errors.nom_1}</p>}
            </div>
            <div  className="contenInputsRP">
               <TextField
                  label="Ingresa tus apellidos"
                  onChange={handChange}
                  name="apellido_1"
                  value={formu.apellido_1}
                  size="small"
                  onBlur={handBlur}
                  sx={bordersx}
               />
               {errors.ape_1 && <p className="showerror">{errors.ape_1}</p>}
            </div>
            <div  className="contenInputsRP">
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

            <div  className="contenInputsRP">
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                     components={["DatePicker"]}
                     style={{ width: "100%"}}
                  >
                     <DatePicker
                        label="Ingresa tu Fecha de nacimiento"
                        value={selectedDate}
                        onChange={handleDateChange}
                        sx={{
                           width: "100%",
                           "& .MuiOutlinedInput-root": {
                              borderRadius: "16px",
                              height:'40px'
                           },
                        }}
                     />
                  </DemoContainer>
               </LocalizationProvider>
               {errors.fc_1 && <p className="showerror"> {errors.fc_1} </p>}
            </div>
            <div className="contenInputsRP">
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
         </div>

         <div className="par2">
            <p className="textgen">Datos de la Dama</p>
            <div className="contenInputsRP">
               <TextField
                  label="Ingresa tus Nombres"
                  onChange={handChange}
                  name="nombre_2"
                  value={formu.nombre_2}
                  size="small"
                  onBlur={handBlur}
                  sx={bordersx}
               />
               {errors.nom_2 && <p className="showerror">{errors.nom_2}</p>}
            </div>
            <div className="contenInputsRP">
               <TextField
                  label="Ingresa tus Apellidos"
                  onChange={handChange}
                  name="apellido_2"
                  value={formu.apellido_2}
                  size="small"
                  onBlur={handBlur}
                  sx={bordersx}
               />
               {errors.ape_2 && <p className="showerror">{errors.ape_2}</p>}
            </div>
            <div className="contenInputsRP">
               <TextField
                  label="Ingresa tu DNI"
                  onChange={handChange}
                  name="dni_2"
                  value={formu.dni_2}
                  size="small"
                  onBlur={handBlur}
                  sx={bordersx}
               />
               {errors.dn_2 && <p className="showerror"> {errors.dn_2} </p>}
            </div>
            <div className="contenInputsRP">
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                     components={["DatePicker"]}
                     style={{ width: "100%" }}
                  >
                     <DatePicker
                        label="Ingrese tu Fecha de nacimiento"
                        value={fechaDos}
                        onChange={handleDateChangeDos}
                        sx={{
                           width: "100%",
                           "& .MuiOutlinedInput-root": {
                              borderRadius: "16px",
                              height:'40px'
                           },
                           
                        }}
                     />
                  </DemoContainer>
               </LocalizationProvider>
               {errors.fc_2 && <p className="showerror"> {errors.fc_2} </p>}
            </div>

            <div  className="contenInputsRP">
               <TextField
                  label="Ingresa tu Academia"
                  onChange={handChange}
                  name="academia_2"
                  value={formu.academia_2}
                  size="small"
                  onBlur={handBlur}
                  sx={bordersx}
               />
               {errors.aca_2 && <p className="showerror"> {errors.aca_2} </p>}
            </div>
         </div>
      </div>
   );
};

export default RegistroPareja;
