
import './Footer.css'

const Footer=()=>{


   const whats = () => {
      window.open("https://wa.me/954109568", "_blank");
   };

   const instagram = () => {
      window.open("https://www.instagram.com/mimarinera.com_/", "_blank");
   };

   
   const youtube = () => {
      window.open("https://www.youtube.com/@MiMarineracom", "_blank");
   };

   const fb = () => {
      window.open("https://www.facebook.com/mimarinerapuntocom", "_blank");
   };

   const tik = () => {
      window.open("https://www.tiktok.com/@mimarinera.com?is_from_webapp=1&sender_device=pc", "_blank");
   };

   
   

    return(
        <footer className="conten_footer">
            <article className="footer_contenArticle">
               {/* <section className="section_comuni">
                  <p>¡COMUNÍCATE CON MIMARINERA.COM!</p>
                  <p>+51 980 785 754</p>
                  <p>yoamo@mimarinera.com</p>
                  <p>Surco, Lima, Perú</p>
               </section> */}
               {/* <section className="section_enlaces">
                  <p>INFÓRMATE Y CRECE</p>
      
                  <a href="/terminos">Términos y Condiciones</a>
                  <a href="/preguntas">Preguntas Frecuentes</a>
                  <a href="/contactanos">Contáctanos</a>
               </section> */}
               {/* <section className="section_info">
                  <p>MANTENTE INFORMADO</p>

                  <input type="text" placeholder="Nombres" />
                  <input type="text" placeholder="Correo electrónico" />
                  <div>
                     <p>Suscríbete</p>
                  </div>
               </section> */}
               {/* <section className="section_nosotros">
                  <p>Nosotros</p>
                  <p>
                     Equipo multidisciplinario de profesionales que aman la
                     marinera y lo muestran de una manera profesional, dinámica
                     y tecnológica.
                  </p>
                  <p>Conócenos más</p>
                  <div className="section_nosotros_sociales">
                     <p>COMUNÍCATE AHORA:</p>
                     <div>
                        <i className="fa-brands fa-whatsapp"></i>
                        <i className="fa-brands fa-facebook-f face"></i>
                        <i className="fa-brands fa-youtube"></i>
                     </div>
                  </div>
               </section> */}
               <section>
                        <i onClick={whats} className="fa-brands fa-whatsapp"></i>
                        <i onClick={fb} className="fa-brands fa-facebook-f face"></i>
                        <i onClick={youtube} className="fa-brands fa-youtube"></i>
                        <i onClick={instagram} className="fa-brands fa-instagram"></i>
                        <i onClick={tik} className="fa-brands fa-tiktok"></i>
               </section>
            </article>
            <article className="footer_contenlog">
               <p>© 2024 <span>MImarinera.com</span> Todos los derechos reservados.</p>
            </article>
         </footer>
    )
}

export default Footer

