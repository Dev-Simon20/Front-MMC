import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
// import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import FuseSvgIcon from "../FuseSvgIcon/FuseSvgIcon";
import clsx from "clsx";

function CourseInfo({ registro, categorias }) {


   const nombreCateg = (cod) => {
      if (categorias.length > 0) {
         for (const e of categorias) {
            if (e.cod_categoria === cod) {
               return e.nombre_cat;
            }
         }
      }
   };
   
   return (
      <div className={clsx("w-full")}>
         <div style={{ display: "flex", justifyContent: "end" }}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.2"
               stroke="currentColor"
               className="w-6 h-6"
               color="green"
               width="30"
            >
               <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
               />
            </svg>
         </div>

         <Typography className="text-16 font-medium">
            {registro.nombre_mod}
         </Typography>

         <Typography
            className="text-13 mt-2 line-clamp-2"
            color="text.secondary"
         >
            {nombreCateg(registro.Categorias_cod_categoria)}
         </Typography>

         <Divider className="w-48 my-24 border-1" light />

         {registro.tipo == "Pareja" ? (
            <>
               <Typography
                  className="flex items-center justify-center space-x-6 text-13"
                  color="text.secondary"
                  style={{display:'flex',justifyContent:'start',alignItems:'center', marginTop:'20px', fontFamily:'sansita'}}
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     style={{height:'45px',width:'45px',padding:'0',marginRight:'5px'}}

                     color="#492558"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                     />
                  </svg>
                  <span className="whitespace-nowrap leading-none">
                     {registro.nombre_1} {registro.apellido_1}
                  </span>
               </Typography>
               <Typography
                  className="flex items-center space-x-6 text-13 mt-8"
                  color="text.secondary"
                  style={{display:'flex',justifyContent:'start',alignItems:'center', marginTop:'20px', fontFamily:'sansita'}}
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     style={{height:'45px',width:'45px',padding:'0',marginRight:'5px'}}
                     color="#492558"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                     />
                  </svg>

                  <span className="whitespace-nowrap leading-none">
                     {registro.nombre_2} {registro.apellido_2}
                  </span>
               </Typography>
            </>
         ) : (
            <>
               <Typography
                  className="flex items-center justify-center space-x-6 text-13"
                  color="text.secondary"
                  style={{display:'flex',justifyContent:'start',alignItems:'center', marginTop:'20px', fontFamily:'sansita'}}
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="w-6 h-6"
                     style={{height:'45px',width:'45px',padding:'0',marginRight:'5px'}}

                     color="#492558"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                     />
                  </svg>

                  <span className="whitespace-nowrap leading-none">
                     {registro.nombre_1} {registro.apellido_1}
                  </span>
               </Typography>
            </>
         )}
      </div>
   );
}

export default CourseInfo;
