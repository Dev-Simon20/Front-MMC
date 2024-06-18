import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import cont from './cont.jpg'
import './cont.css'
const Contactanos = () => {
   return (
      <div className="conten_contacto">
         <Header activ={false} />
         <div className="imagContac">
         <img  src={cont} alt="" />
            <p>CONTÁCTANOS</p>
         </div>

         <div className="conten_contacto_texto">
            <p id="contacto_text">AMAMOS LA MARINERA TANTO COMO TÚ. </p>
            <p id="contacto_qs">¿CÓMO PODEMOS AYUDARTE? COMUNÍCATE
            <span> CON NOSOTROS.</span></p>
            <article>
                <section>
                    <p>CELULAR</p>
                    <p>+51 980 785 754</p>
                </section>
                <section>
                    <p>OFICINA</p>
                    <p>+511 499 7209</p>
                </section>
                <section>
                    <p>DIRECIÓN</p>
                    <p>Surco, Lima, Perú</p>
                </section>
                <section>
                    <p>EMAIL</p>
                    <p className="txtred">yoamo@mimarinera.com</p>
                </section>
            </article>
         </div>
         <Footer />
      </div>
   );
};

export default Contactanos;
