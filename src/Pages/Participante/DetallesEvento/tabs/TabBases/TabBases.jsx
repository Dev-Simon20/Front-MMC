import "./TabBases.css";
import af from "./af.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const TabBases = () => {
   return (
      <div className="contenBasesEvento">
         <section className="contenIntro">
            <img src={af} alt="" />
            <article>
               <b>
                  <h2 style={{ color: "#45204b", lineHeight: "1" }}>
                     Bienvenida
                  </h2>
               </b>
               <p>
                  Con el propósito de difundir y revalorar las expresiones
                  culturales de nuestro país, la agrupación musical Anthony’s
                  Friends presentan el 1er Concurso de Marinera Norteña en sus
                  modalidades de novel y nacional.
               </p>
               <br />
               <b>Objetivos</b>
               <p>
                  El Concurso tiene como objetivo fundamental la difusión,
                  promoción y preservación de la Marinera Norteña, cuidando su
                  esencia y raíces, así como promoción del gran repertorio
                  musical de esta agrupación. El concurso consta de tres etapas,
                  teniendo en consideración en cada etapa puntajes en
                  vestimenta, baile y desempeño.
               </p>
            </article>
         </section>
         <section className="contenAcordiones">
            <div className="singleAcordion">
               <Accordion>
                  <AccordionSummary
                     aria-controls="panel1-content"
                     id="panel1-header"
                     expandIcon={<ExpandMoreIcon />}
                  >
                     <p className="acordionHeader">
                        {" "}
                        Modalidades y restricciones
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="contenDetallesAcordion">
                        <ol>
                           <li className="primerOrden">Noveles</li>
                           <ul>
                              <li className="segundoOrden">
                                 NO podrán participar aquellas personas que
                                 hayan ganado un campeonato nacional.{" "}
                              </li>
                           </ul>
                           <li className="primerOrden">Nacional</li>
                           <ul>
                              <li className="segundoOrden">
                                 Sin restricciones
                              </li>
                           </ul>
                        </ol>
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>
            <div className="singleAcordion">
               <Accordion>
                  <AccordionSummary
                     aria-controls="panel1-content"
                     id="panel1-header"
                     expandIcon={<ExpandMoreIcon />}
                  >
                     <p className="acordionHeader">Años de cada categoría</p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="contenDetallesAcordion">
                        <ul>
                           <li className="segundoOrden">
                              <b>PRE INFANTE: </b> 2017, 2018, 2019
                           </li>
                           <li className="segundoOrden">
                              <b>INFANTE: </b> 2013, 2014, 2015, 2016.
                           </li>
                           <li className="segundoOrden">
                              <b>INFANTIL:</b> 2009, 2010, 2011, 2012.
                           </li>
                           <li className="segundoOrden">
                              <b>JUNIOR: </b> 2005, 2006, 2007, 2008.
                           </li>
                           <li className="segundoOrden">
                              <b>JUVENIL: </b> 2001, 2002, 2003, 2004.
                           </li>
                           <li className="segundoOrden">
                              <b>ADULTO: </b> 1988 hasta el año 2000.
                           </li>
                           <li className="segundoOrden">
                              <b>SENIOR: </b> 1974 hasta el año 1987.
                           </li>
                           <li className="segundoOrden">
                              <b>MASTER: </b> 1973 y antes.
                           </li>
                           <li className="segundoOrden">
                              <b>ORO: </b> 1961, 1960, 1959,1958, y antes.
                           </li>
                        </ul>
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>
            <div className="singleAcordion">
               <Accordion>
                  <AccordionSummary
                     aria-controls="panel1-content"
                     id="panel1-header"
                     expandIcon={<ExpandMoreIcon />}
                  >
                     <p className="acordionHeader">Categorías por modalidad</p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="contenDetallesAcordion">
                        <ol>
                           <li className="primerOrden">Noveles</li>
                           <ul className="ulRow">
                              <li className="segundoOrden">Pre infante</li>
                              <li className="segundoOrden">Infante</li>
                              <li className="segundoOrden">infantil</li>
                              <li className="segundoOrden">Junior</li>
                              <li className="segundoOrden">Juvenil</li>
                              <li className="segundoOrden">Adulto</li>
                              <li className="segundoOrden">Senior</li>
                              <li className="segundoOrden">Master</li>
                           </ul>

                           <li className="primerOrden">Nacional</li>
                           <ul className="ulRow">
                              <li className="segundoOrden">Pre infante</li>
                              <li className="segundoOrden">Infante</li>
                              <li className="segundoOrden">infantil</li>
                              <li className="segundoOrden">Junior</li>
                              <li className="segundoOrden">Juvenil</li>
                              <li className="segundoOrden">Adulto</li>
                              <li className="segundoOrden">Senior</li>
                              <li className="segundoOrden">Master</li>
                              <li className="segundoOrden">Oro</li>
                           </ul>
                        </ol>
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>
            <div className="singleAcordion">
               <Accordion>
                  <AccordionSummary
                     aria-controls="panel1-content"
                     id="panel1-header"
                     expandIcon={<ExpandMoreIcon />}
                  >
                     <p className="acordionHeader"> Lista de marineras</p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="contenMarineras">
                        <ul id="relacion">
                           <li>Relación de marineras</li>
                           <ul>
                              <li>Callao Puerto y Marinera</li>
                              <li>San Marcos la Decana</li>
                              <li>Serrana del Alma Mía</li>
                              <li>Bailando con el balón</li>
                              <li>Cuando mi alma sueña</li>
                              <li>Chim Pum Callao</li>
                              <li>Como baila la vecina</li>
                              <li>Reinas y Chalanes</li>
                              <li>Señor del Mar</li>
                              <li>Pucusana perla del Pacíf</li>
                              <li>El Café de tus ojos</li>
                              <li>El Boquerón</li>
                              <li>Pasión y Orgullo</li>
                              <li>Jaranera y Majestuosa</li>
                              <li>La Cosecha</li>
                              <li>El Embajador</li>
                              <li>La Pacorana</li>
                              <li>Mi Reina mi madre</li>
                              <li>Los Picaus</li>
                              <li>Festeja Perú</li>
                              <li>La Esquina del Pañuelo</li>
                              <li>Entre Pañuelos</li>
                              <li>Bella y Majestuosa</li>
                              <li>Luna Norteña</li>
                              <li>Don Elio</li>
                              <li>Vihanny Reina de su tier</li>
                              <li>Herencia</li>
                              <li>Encanto de Limeña</li>
                              <li>El Embrujado</li>
                              <li>La Tapadera</li>
                              <li>El Swing de la Jayancane</li>
                              <li>La Flor de la canela</li>
                              <li>Bello Durmiente</li>
                              <li>Ven cariño mío</li>
                              <li>Anita la Huerequeque</li>
                              <li>Cuna de Campeones</li>
                              <li>Mi bella flor del sur</li>
                              <li>Chinita Patricia</li>
                              <li>Llegó la Reina</li>
                           </ul>
                        </ul>

                        <ul id="relacionFinales">
                           <li>Marineras para Finales (cantadas)</li>

                           <ul>
                              <li>Palo Blanco</li>
                              <li>La Hamaca</li>
                              <li>La Veguera</li>
                              <li>Trujillo de mis amores</li>
                              <li>Que Viva Chiclayo</li>
                              <li>Sacachispas</li>
                              <li>La Huanchaquera</li>
                              <li>Marinera de Corazón</li>
                              <li>Mera North</li>
                              <li>El Chisco Silbador</li>
                              <li>Así baila mi Trujillana</li>
                              <li>Dulce y Bonita</li>
                              <li>Chepén madre de arer</li>
                              <li>Maestra de piel canela</li>
                           </ul>
                        </ul>
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>
            <div className="singleAcordion">
               <Accordion>
                  <AccordionSummary
                     aria-controls="panel1-content"
                     id="panel1-header"
                     expandIcon={<ExpandMoreIcon />}
                  >
                     <p className="acordionHeader">Consideraciones</p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="contenDetallesAcordion">
                        <ul>
                           <li className="segundoOrden">
                              El día lunes 01 de julio se empezará con las
                              inscripciones.
                           </li>
                           <li className="segundoOrden">
                              Todos los concursantes deben llegar con tiempo
                              suficiente para estar previamente listos al
                              llamado de su categoría, de no ser así podrían
                              quedar fuera del concurso. Tener en cuenta que los
                              horarios son exactos
                           </li>
                           <li className="segundoOrden">
                              De resultar algún empate se desarrollará un baile
                              de media marinera con puntaje de paleta en mano y
                              por descarte.{" "}
                           </li>
                           <li className="segundoOrden">
                              En cada modalidad el concurso cuenta con 3 etapas:
                              <ul>
                                 <li className="tercerOrden"> Eliminatoria</li>
                                 <li className="tercerOrden">
                                    {" "}
                                    Semifinal y Final{" "}
                                 </li>
                              </ul>
                           </li>
                           <li className="segundoOrden">
                              La inscripción del concurso del lunes 01 de julio
                              al viernes 12 de julio
                              <ul>
                                 <li className="tercerOrden">
                                    <b>S/ 30.00 </b>
                                 </li>
                              </ul>
                           </li>
                           <li className="segundoOrden">
                              La inscripción el mismo día del concurso
                              <ul>
                                 <li className="tercerOrden">
                                    {" "}
                                    <b>S/ 40.00</b>
                                 </li>
                              </ul>
                           </li>
                        </ul>
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>
            <div className="singleAcordion">
               <Accordion>
                  <AccordionSummary
                     aria-controls="panel1-content"
                     id="panel1-header"
                     expandIcon={<ExpandMoreIcon />}
                  >
                     <p className="acordionHeader">Calificación</p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="contenDetallesAcordion">
                        <h3
                           style={{
                              textAlign: "start",
                              fontFamily: "sansita",
                              marginBottom: "7px",
                           }}
                        >
                           Los miembros del jurado tendrán los siguientes
                           criterios de calificación:
                        </h3>
                        <p
                           style={{
                              textAlign: "start",
                              fontFamily: "sansita",
                              marginBottom: "20px",
                              color: "rgb(83, 81, 81",
                           }}
                        >
                           El jurado estará integrado por especialistas y
                           conocedores en todos los aspectos de la calificación;
                           personajes del mundo musical, artístico y producción;
                           y su fallo será único e inapelable.
                        </p>

                        <h4
                           style={{ textAlign: "start", fontFamily: "sansita" }}
                        >
                           Para la calificación se tomará en cuenta lo
                           siguiente:
                        </h4>
                        <ul>
                           <li className="segundoOrden">
                              Expresión corporal en relación al personaje en
                              escena.
                           </li>
                           <li className="segundoOrden">
                              Organización, Creatividad, Originalidad.
                           </li>
                           <li className="segundoOrden">
                              Aplomo y personalidad.
                           </li>
                           <li className="segundoOrden">
                              Presentación impecable del vestuario y accesorios.
                           </li>
                           <li className="segundoOrden">
                              Talento y habilidad danzaría.
                           </li>
                           <li className="segundoOrden">
                              Desplazamiento escénico.
                           </li>
                           <li className="segundoOrden">Rítmica corporal.</li>
                        </ul>

                        <h4
                           style={{ textAlign: "start", fontFamily: "sansita" }}
                        >
                           La calificación será:
                        </h4>
                        <ul>
                           <li className="segundoOrden">
                              En la eliminatoria será con planilla.
                           </li>
                           <li className="segundoOrden">
                              En la semifinal y final con paleta en mano.
                           </li>
                           <li className="segundoOrden">
                              Puntaje del 1 al 5 durante eliminatoria, semifinal
                              y final.
                           </li>
                        </ul>
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>
            <div className="singleAcordion">
               <Accordion>
                  <AccordionSummary
                     aria-controls="panel1-content"
                     id="panel1-header"
                     expandIcon={<ExpandMoreIcon />}
                  >
                     <p className="acordionHeader"> Premios</p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="contenPremiosCard">
                        <div class="premios-card">
                           <h3>🏆 PREMIOS NOVELES</h3>
                           <ul>
                              <li>
                                 <span>1° Puesto:</span> Escapulario, Banda,
                                 trofeo
                              </li>
                              <li>
                                 <span>2° Puesto:</span> Medalla y diploma de
                                 Honor
                              </li>
                              <li>
                                 <span>3° Puesto:</span> Medalla y diploma de
                                 Honor
                              </li>
                           </ul>
                        </div>

                        <div class="premios-card">
                           <h3>🏆 PREMIOS NACIONAL </h3>
                           <ul>
                              <li>
                                 <span>1° Puesto:</span> Escapulario, Banda,
                                 trofeo y <b>premio en efectivo</b>
                              </li>
                              <li>
                                 <span>2° Puesto:</span>Medalla y diploma de
                                 Honor
                              </li>
                              <li>
                                 <span>3° Puesto:</span> Medalla y diploma de
                                 Honor
                              </li>
                           </ul>
                        </div>
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>
         </section>
      </div>
   );
};

export default TabBases;
