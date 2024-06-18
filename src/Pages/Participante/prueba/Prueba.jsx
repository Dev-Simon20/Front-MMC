import { useEffect, useState } from "react";
import { helphttp } from "../../../Helpers/helphttps";
import Cookies from "../../../Cookies";


const Prueba=()=>{
    const api = helphttp();
    const url = "https://server.eventosdemarinera.com/userpar/concursos";
    const [ev,setEventos]=useState(null)
    useEffect(() => {
        const obtenerCon = async () => {
           try {
              const data = await api.get(url);
              setEventos(data);
           } catch (error) {
              console.log("Erroe en la pericion Http");
           }
        };
        obtenerCon();
     }, []);
     useEffect(()=>{
        console.log(Cookies.get());
        if (ev) {
            let gll=Cookies.get('token');
            console.log(gll);
        }
     },[ev])
    return(<>

      <p>Prueba de token</p>
    
    </>)
}

export default Prueba