import "./BasesLuis.css";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import cm from "./cm.jpg";



const BasesLuis = () => {
    return (
        <div className="contenBasesEvento">
            <section className="contenIntro">
                <img src={cm} alt="bkhkj" />
                <article>
                    <b>
                        <h2 style={{ color: "#45204b", lineHeight: "1" }}>
                            Bienvenida
                        </h2>
                    </b>
                    <br />
                    <p>
                        La Asociación Cultural “Cristo Marino y Caballero de los
                        Mares” con la finalidad de dar un justo reconocimiento a
                        nuestra Gloriosa Marina de Guerra y a su Personal que lo
                        integra, realiza los Concursos Clasificatorios Regionales de
                        Marinera “Caballero de los Mares” en honor a nuestro Almirante
                        don Miguel Grau Seminario el Peruano del Milenio.
                    </p>
                    <br />
                    <p>
                        Asimismo, el mes de febrero de cada año, la Asociación
                        Cultural Cristo Marino y Caballero de los Mares, realiza el
                        Concurso Nacional de Marinera Norteña “HEROES DEL PACÍFICO” en
                        homenaje de todos los héroes del Perú, en el cual sólo
                        participan los mejores exponentes de las diferentes ciudades
                        del Perú, es decir los primeros puestos de los Concursos
                        Clasificatorios Regionales Caballero de los Mares.
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
                                    <li className="primerOrden">Modalidad Seriado</li>
                                    <ul>
                                        <li className="segundoOrden">
                                            Sólo podrán inscribirse de manera virtual de
                                            acuerdo a programación
                                        </li>
                                        <li className="segundoOrden">
                                            En esta modalidad se permitirá la participación
                                            de un máximo de 75 participantes entre las 4
                                            categorías (varon o dama).
                                        </li>
                                        <li className="segundoOrden">
                                            Los participantes de esta modalidad serán
                                            calificados por tanda, sólo al varón o dama
                                        </li>
                                        <li className="segundoOrden">
                                            Participarán 3 alumnos por cada tanda.
                                        </li>
                                        <li className="segundoOrden">
                                            El nivel de los participantes de esta modalidad
                                            debe ser básico, no debiendo haber obtenido
                                            ningún campeonato NOVEL-NOVEL.
                                        </li>
                                    </ul>

                                    <li className="primerOrden">Modalidad Individual</li>
                                    <ul>
                                        <li className="segundoOrden">
                                            Sólo podrán inscribirse de manera virtual
                                            de acuerdo a programación.
                                        </li>
                                        <li className="segundoOrden">
                                            En esta modalidad se permitirá la
                                            participación de un máximo de 75 participantes
                                            entre las 4 categorías.
                                        </li>
                                        <li className="segundoOrden">
                                            Esta modalidad es única y permitirá
                                            participar a las damas que no puedan competir
                                            por no encontrar pareja de baile.
                                        </li>
                                        <li className="segundoOrden">
                                            En la modalidad INDIVIDUAL podrán
                                            inscribirse sólo damas.
                                        </li>
                                        <li className="segundoOrden">
                                            Las participantes que logren obtener el
                                            primer puesto podrán participar en el Concurso
                                            Nacional Héroes del Pacífico
                                        </li>
                                        <li className="segundoOrden">
                                            Los números de los participantes serán
                                            entregados en la mesa de control de inscripció
                                        </li>
                                    </ul>

                                    <li className="primerOrden">Modalidad NOVELES</li>
                                    <ul>
                                        <li className="segundoOrden">
                                            Podrán inscribirse de manera virtual de
                                            acuerdo a programación y de manera presencial
                                            en el coliseo hasta antes que inicie su
                                            modalidad.
                                        </li>
                                        <li className="segundoOrden">
                                            En la Modalidad NOVELES es requisito
                                            indispensable no haber obtenido ningún
                                            campeonato en la modalidad nacional.
                                        </li>
                                        <li className="segundoOrden">
                                            Esta modalidad se desarrollará en tres
                                            etapas: eliminatoria, semifinal y final.
                                        </li>
                                        <li className="segundoOrden">
                                            Podrán participar hasta 4 parejas por tanda
                                        </li>
                                        <li className="segundoOrden">
                                            Es criterio del comité organizador, el
                                            considerar una segunda etapa eliminatoria, en
                                            la cual sólo se bailará primera, de acuerdo a
                                            la cantidad de participantes.
                                        </li>
                                        <li className="segundoOrden">
                                            Los números de los participantes serán
                                            entregados en la mesa de control de
                                            inscripción.
                                        </li>
                                        <li className="segundoOrden">
                                            LOS CAMPEONES CABALLERO DE LOS MARES DE
                                            ESTA MODALIDAD ESTAN PROHIBIDOS DE PARTICIPAR
                                            EN OTRO CONCURSO EN LA MODALIDAD NOVEL-NOVEL,
                                            DE DETECTARSE TAL SITUACION SE LE QUITARA EL
                                            CAMPEONATO.
                                        </li>
                                    </ul>
                                    <li className="primerOrden">Modalidad Nacional</li>
                                    <ul>
                                        <li className="segundoOrden">
                                            Podrán inscribirse de manera virtual de
                                            acuerdo a programación y de manera presencial
                                            en el coliseo hasta antes que inicie su
                                            modalidad.
                                        </li>
                                        <li className="segundoOrden">
                                            Podrán participar, los concursantes de las
                                            diferentes modalidades y campeones nacionales.
                                        </li>
                                        <li className="segundoOrden">
                                            Esta modalidad se desarrollará en tres
                                            etapas: eliminatoria, semifinal y final.
                                        </li>
                                        <li className="segundoOrden">
                                            Podrán participar hasta 4 parejas por tanda
                                        </li>
                                        <li className="segundoOrden">
                                            Es criterio del comité organizador, el
                                            considerar una segunda etapa eliminatoria, en
                                            la cual sólo se bailará primera, de acuerdo a
                                            la cantidad de participantes.
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
                                        <b>PRE INFANTE: </b> desde 2017
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
                                    <li className="primerOrden">Seriado</li>
                                    <ul className="ulRow">
                                        <li className="segundoOrden">Pre infante</li>
                                        <li className="segundoOrden">Infante</li>
                                        <li className="segundoOrden">infantil</li>
                                        <li className="segundoOrden">Junior</li>
                                    </ul>

                                    <li className="primerOrden">Individual</li>
                                    <ul className="ulRow">
                                        <li className="segundoOrden">Pre infante</li>
                                        <li className="segundoOrden">Infante</li>
                                        <li className="segundoOrden">infantil</li>
                                        <li className="segundoOrden">Junior</li>
                                    </ul>

                                    <li className="primerOrden">Novel</li>
                                    <ul className="ulRow">
                                        <li className="segundoOrden">Pre infante</li>
                                        <li className="segundoOrden">Infante</li>
                                        <li className="segundoOrden">infantil</li>
                                        <li className="segundoOrden">Junior</li>
                                        <li className="segundoOrden">Juvenil</li>
                                        <li className="segundoOrden">Adulto</li>
                                        <li className="segundoOrden">Senior</li>
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
                                    <li>SERIADO</li>
                                    <ul>
                                        <p>1.- HUAQUERO</p>
                                        <p>2.- DULCE Y BONITA</p>
                                        <p>3.- CHICLAYANITA</p>
                                        <p>4.- SEÑORITA MARINERA</p>
                                        <p>5.- QUE VIVA CHICLAYO</p>
                                        <p>6.- 300 LIBRAS DE ORO</p>
                                        <p>7.- PILSEN TRUJILLO</p>
                                        <p>8.- SACACHISPAS</p>
                                        <p>9.- SAN MIGUEL DE PIURA</p>
                                        <p>10.- DEL NORTE VENGO</p>
                                    </ul>
                                </ul>

                                <ul id="relacionFinales">
                                    <li>INDIVIDUAL, NOVELES Y NACIONAL (ELIMINATORIAS BANDA)</li>

                                    <ul>
                                        <p>1.- SUEÑO DE POCHI</p>
                                        <p>2.- CORAZON CORAZON</p>
                                        <p>3.- LA CONCHEPERLA</p>
                                        <p>4.- CUAL ESE MEJOR</p>
                                        <p>5.- LA VEGUERA</p>
                                        <p>6.- BATUTA Y GLORIA</p>
                                        <p>7.- MARINERA DE CORAZON</p>
                                        <p>8.- EL GATO BLANCO</p>
                                        <p>9.- SEÑORITA MARINERA</p>
                                        <p>10.- CIELO NORTEÑO</p>
                                        <p>11.- LA CENTENARIA</p>
                                        <p>12.- TU LADRONA YO LADRON</p>
                                        <p>13.- BAILANDO CON EL BALON</p>
                                        <p>14.- ARRIBA PERU</p>
                                        <p>15.- ARETES DE ORO</p>
                                    </ul>
                                </ul>

                                <ul id="relacionFinales">
                                    <li>INDIVIDUAL, NOVELES Y NACIONAL (SEMIFINAL CANTADA)</li>

                                    <ul>
                                        <p>1.- VELERO UNION</p>
                                        <p>2.- AVIACION NAVAL</p>
                                        <p>3.- EL SUBMARINISTA</p>
                                        <p>4.- COMBATIENTES DE CORAZON</p>
                                        <p>5.- GALLARDO INFANTE DE MARINA</p>
                                        <p>6.- ABELARDO GAMARRA EL TUNANTE</p>
                                        <p>7.- MIGUEL GRAU, CABALLERO DE LOS MARES</p>
                                        <p>8.- TACNA EN LA MAR</p>
                                        <p>9.- 200 AÑOS DE GLORIA</p>
                                        <p>10.- PAÑUELOS NAVALES</p>
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
                                    Los Concursos Clasificatorios Regionales de Marinera “Caballero de los Mares” año 2024 se detallan en el anexo
1 del presente reglamento. Estos concursos otorgarán clasificación al Concurso Nacional de Marinera Norteña “Héroes del Pacífico”.

                                    </li>
                                    <li className="segundoOrden">
                                    Para el adecuado desarrollo de los Concursos Clasificatorios Regionales de Marinera “Caballero de los Mares” año 2024, todos los asistentes darán cumplimiento a las disposiciones que se indican en el presente Reglamento.
                                    </li>
                                    <li className="segundoOrden">
                                    Para el adecuado desarrollo de los Concursos Clasificatorios Regionales de Marinera “Caballero de los Mares” año 2024, todos los asistentes darán cumplimiento a las disposiciones que se indican en el presente Reglamento.
                                    </li>
                                    <li className="segundoOrden">
                                    No se considerará campeón a aquel bailarín que haya participado adulterando o falsificando la documentación, los mismos que quedarán inhabilitados de participar en todos nuestros futuros concursos.
                                    </li>
                                    <li className="segundoOrden">
                                    De presentarse una sola pareja participante en una categoría, podrán realizar sólo su baile de exhibición; sin embargo, no se le considerará campeones al no haber tenido competencia.
                                    </li>
                                    <li className="segundoOrden">
                                    Los reclamos referidos a los participantes en el concurso podrán ser presentados en cualquier momento antes de la etapa eliminatoria y hasta 72 horas después de la etapa final.
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
                                <p
                                    style={{
                                        textAlign: "start",
                                        fontFamily: "sansita",
                                        marginBottom: "20px",
                                        color: "rgb(83, 81, 81",
                                    }}
                                >
                                    La calificación para la etapa eliminatoria,
                                    semifinal y final será de 3 a 5 puntos, por medio de
                                    PALETA EN MANO.
                                </p>

                                <h4
                                    style={{ textAlign: "start", fontFamily: "sansita" }}
                                >
                                    Parámetros de calificación:
                                </h4>
                                <ul>
                                    <li className="segundoOrden">
                                         Enamoramiento, mensaje y expresión del baile
                                        en pareja (naturalidad).
                                    </li>
                                    <li className="segundoOrden">
                                        Coordinación y presentación
                                    </li>
                                    <li className="segundoOrden">Garbo y salero</li>
                                    <li className="segundoOrden">
                                         Habilidad y Desplazamiento
                                    </li>
                                    <li className="segundoOrden">Zapateo.</li>
                                    <li className="segundoOrden">
                                         Aplomo, personalidad y espontaneidad.
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
                                    <h3>🏆 Seriado e Individual</h3>
                                    <ul>
                                        <li>
                                            <span>1° Puesto:</span> E Escapulario, Medalla
                                            y Diploma
                                        </li>
                                        <li>
                                            <span>2° Puesto:</span> Medalla y diploma
                                        </li>
                                        <li>
                                            <span>3° Puesto:</span> Medalla y diploma
                                        </li>
                                    </ul>
                                </div>

                                <div class="premios-card">
                                    <h3>🏆 Noveles y Nacional </h3>
                                    <ul>
                                        <li>
                                            <span>1° Puesto:</span> Banda o escapulario,
                                            Medallas de Honor, y diploma.
                                        </li>
                                        <li>
                                            <span>2° Puesto:</span>Medallas de honor y
                                            diplomas.
                                        </li>
                                        <li>
                                            <span>3° Puesto:</span> Medallas de honor y
                                            diplomas.
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

export default BasesLuis;
