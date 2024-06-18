import { useState } from "react";
import { addUser } from "../../../firebase/config";
import { Button, TextField } from "@mui/material";
import "./fr.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "react-select";
import MenuItem from "@mui/material/MenuItem";
import Loader from "../../../Components/Loader/Loader";
import Header from "../../../Components/Header/Header";
import Alert from "@mui/material/Alert";

const FormRegistroEvento = () => {
   const formDefault = {
      nombreOrga: "",
      numero: "",
      tipoE: "0",
      nombreE: "",
      fechaEvento: "",
   };

   const [form, setForm] = useState(formDefault);
   const [selectedDate, setSelectedDate] = useState(null);
   const [load, setLoad] = useState(false);
   const [alertSuces, setAlertSuces] = useState(false);

   const handleClick = () => {
      const send = async () => {
         setLoad(true);
         await addUser(form);
         setForm(formDefault);
         setLoad(false);
         alertaActiva();
      };
      send();
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
            name: "fechaEvento",
            value: formattedDate,
         },
      };
      handleChange(e);
   };

   const handleChange = (e) => {
      setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
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

   const alertaActiva = () => {
      setAlertSuces(true);
      setTimeout(() => {
         setAlertSuces(false);
      }, 3000);
   };

   return (
      <>
         <Header />
         <div className="contenRegistroEvento">
            {load && <Loader />}
              
               <div id="contenAlertSu">
                  <Alert variant="filled" severity="success">
                     This is a filled success Alert.
                  </Alert>
               </div>
            
            <div className="contenRegisterE">
               <h1>REGISTRA TU EVENTO DE MARINERA</h1>
               <h2>
                  <b>GRATIS</b>
               </h2>
               <article>
                  <div className="contengText">
                     <TextField
                        name="nombreOrga"
                        value={form.nombreOrga}
                        onChange={handleChange}
                        label="Nombres y Apellidos"
                     />
                  </div>
                  <div className="contengText">
                     <TextField
                        name="numero"
                        value={form.numero}
                        onChange={handleChange}
                        label="Número Contacto"
                     />
                  </div>
               </article>
               <article>
                  <div className="contenfText">
                     <TextField
                        id="outlined-select-currency"
                        select
                        label="Tipo de Evento"
                        name="tipoE"
                        value={form.tipoE}
                        onChange={handleChange}
                     >
                        {tip.map((option) => (
                           <MenuItem
                              key={option.cod_tipo}
                              value={option.cod_tipo}
                           >
                              {option.nombre}
                           </MenuItem>
                        ))}
                     </TextField>
                  </div>
                  <div className="contenfText">
                     <TextField
                        name="nombreE"
                        value={form.nombreE}
                        onChange={handleChange}
                        label="Nombre del evento"
                     />
                  </div>
                  <div className="contenfText">
                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                           <DatePicker
                              label="Fecha del evento"
                              value={selectedDate}
                              onChange={handleDateChange}
                              sx={{
                                 width: "100%",
                              }}
                           />
                        </DemoContainer>
                     </LocalizationProvider>
                  </div>
               </article>
               <div id="buttoConten">
                  <div onClick={handleClick}>
                     <p>Registrar</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default FormRegistroEvento;
