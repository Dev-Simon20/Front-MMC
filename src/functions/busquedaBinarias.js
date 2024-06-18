

export const buscarDepartamentoPorId=(departamentos, id) =>{
    let inicio = 0;
    let fin = departamentos.length - 1;
    
    while (inicio <= fin) {
       const medio = Math.floor((inicio + fin) / 2);
       const deptoMedio = departamentos[medio];
       
       if (deptoMedio.id === id) {
          return deptoMedio.name;
       } else if (deptoMedio.id < id) {
          inicio = medio + 1;
       } else {
          fin = medio - 1;
       }
    }
    
    return null;
 }

export  const buscarProvinciaPorId=(provincias, id) =>{
    let inicio = 0;
    let fin = provincias.length - 1;
    
    while (inicio <= fin) {
       const medio = Math.floor((inicio + fin) / 2);
       const provinciaMedia = provincias[medio];
       
       if (provinciaMedia.id === id) {
          return provinciaMedia.name;
       } else if (provinciaMedia.id < id) {
          inicio = medio + 1;
       } else {
          fin = medio - 1;
       }
    }
    
    return null;
 }

 export const buscarDistritoPorId=(distritos, id)=>{
    let inicio = 0;
    let fin = distritos.length - 1;
    
    while (inicio <= fin) {
       const medio = Math.floor((inicio + fin) / 2);
       const distritoMedio = distritos[medio];
       
       if (distritoMedio.id === id) {
          return distritoMedio.name;
       } else if (distritoMedio.id < id) {
          inicio = medio + 1;
       } else {
          fin = medio - 1;
       }
    }
    
    return null;
 }