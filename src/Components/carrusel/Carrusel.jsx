import  { useEffect, useState } from "react";
import "./carrusel.css";
import destacar from './mmcpor.png'
import alson from './alson.jpg'
import { useNavigate } from 'react-router-dom'


let imag = [
  destacar,alson
];

const Carrusel = () => {
  const [imagenes,setImagenes]=useState(imag)
  const [imagenActual, setImagenActual] = useState(0);
  const [fade, setFade] = useState(true); // Estado para controlar la transición
  const navigate=useNavigate();



  useEffect(() => {
    const intervalo = setInterval(() => {
      setFade(false); // Inicia la transición de salida
      setTimeout(() => {
        setImagenActual((imagenActual + 1) % imagenes.length);
        setFade(true); // Inicia la transición de entrada
      }, 300); // Ajusta el tiempo de espera según la duración de la transición
    }, 5000); // Cambia de imagen cada 5 segundos

    return () => clearInterval(intervalo); 
  }, [imagenActual, imagenes.length]);

  const llevame=(pos)=>{
    if(pos==1){
     navigate("/calendario/concurso/concurso-al-son-de-mi-tierra-callao-2024");
    }
  }
  return (
    <div className="carrusel">
      <img
        src={imagenes[imagenActual]}
        alt={`Imagen ${imagenActual + 1}`}
        onClick={()=>llevame(imagenActual)}
        className={`imagen-carrusel ${fade ? 'fade-in' : 'fade-out'}`}
        style={{cursor:`${imagenActual==1?'pointer':'default'}`}}
      />
    </div>
  );
};

export default Carrusel;
