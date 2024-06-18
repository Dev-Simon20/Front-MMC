import React, { lazy, Suspense,useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoaderPage from "./Components/LoaderPage/LoaderPage";
import FormRegistroEvento from "./Pages/Participante/FormRegistroEvento/FormRegistroEvento";
import Raiz from "./Components/Raiz/Raiz";
import Redirection from "./Components/Redirection/Redirection";
// import ReactGA from 'react-ga';
// import ReactDOM from 'react-dom';

// const TRACKING_ID = "G-JYHXL309GW"; // OUR_TRACKING_ID

// ReactGA.initialize(TRACKING_ID);
// import ListaConcursoP from "./Pages/Participante/ListaConcurso/ListaConcursosP";
// import RegistroPar from "./Pages/Participante/RegistroParticipante/RegistroParticipante";
// import VerificacionRegistro from "./Pages/Participante/VerificacionRegistro/VerificacionRegistro";
// import DetallesEvento from "./Pages/Participante/DetallesEvento/DetallesEvento";
// import Terminos from "./Pages/Participante/Terminos/Terminos";
// import Preguntas from "./Pages/Participante/Preguntas/Preguntas";
// import Contactanos from "./Pages/Participante/Contactanos/Contactanos";

const ListaConcursoP = lazy(() =>
   import("./Pages/Participante/ListaConcurso/ListaConcursosP")
);
const RegistroPar = lazy(() =>
   import("./Pages/Participante/RegistroParticipante/RegistroParticipante")
);
const VerificacionRegistro = lazy(() =>
   import("./Pages/Participante/VerificacionRegistro/VerificacionRegistro")
);
const DetallesEvento = lazy(() =>
   import("./Pages/Participante/DetallesEvento/DetallesEvento")
);
const Terminos = lazy(() => import("./Pages/Participante/Terminos/Terminos"));
const Preguntas = lazy(() =>
   import("./Pages/Participante/Preguntas/Preguntas")
);
const Contactanos = lazy(() =>
   import("./Pages/Participante/Contactanos/Contactanos")
);



function App() {


   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route
                  path="/"
                  element={
                     <Suspense fallback={<LoaderPage />}>
                        <Raiz/>
                     </Suspense>
                  }
               />

               <Route
                  path="/calendario"
                  element={
                     <Suspense fallback={<LoaderPage />}>
                        <ListaConcursoP />
                     </Suspense>
                  }
               />

               <Route
                  path="/calendario/:tipo/:slug/registro"
                  element={
                     <Suspense fallback={<LoaderPage />}>
                        <Redirection />
                     </Suspense>
                  }
               />
               <Route
                  path="/calendario/:tipo/:slug/verificacion"
                  element={
                     <Suspense fallback={<LoaderPage/>}>
                        <VerificacionRegistro />
                     </Suspense>
                  }
               />
               <Route
                  path="/calendario/:tipo_evento/:slug"
                  element={
                     <Suspense fallback={<LoaderPage/>}>
                        <DetallesEvento />
                     </Suspense>
                  }
               />
               <Route
                  path="/terminos"
                  element={
                     <Suspense fallback={<LoaderPage/>}>
                        <Terminos />
                     </Suspense>
                  }
               />
               <Route
                  path="/calendario/r"
                  element={
                     <Suspense fallback={<LoaderPage/>}>
                        <FormRegistroEvento />
                     </Suspense>
                  }
               />
               <Route
                  path="/preguntas"
                  element={
                     <Suspense fallback={<LoaderPage/>}>
                        <Preguntas />
                     </Suspense>
                  }
               />
               <Route
                  path="/contactanos"
                  element={
                     <Suspense fallback={<LoaderPage/>}>
                        <Contactanos />
                     </Suspense>
                  }
               />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
