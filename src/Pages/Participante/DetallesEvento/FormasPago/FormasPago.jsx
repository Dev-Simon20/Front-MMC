import "./FormasPago.css";

const FormasPago = ({ slugy }) => {
   return (
      <div className="contenFormasPago">
         {slugy == "anthony's-friends-lima-2024-2" && (
            <div className="contenListaMod">
               <h2>Precios</h2>
               <ul>
                  <li>
                     <b>Novel</b>
                     <p>S/. 30</p>
                  </li>
                  <li>
                     <b>Nacional</b>
                     <p>S/. 30</p>
                  </li>
               </ul>
            </div>
         )}
         {slugy == "caballero-de-los-mares-arequipa-2024" && (
            <div className="contenListaMod">
               <h2>Precios</h2>
               <ul>
                  <li>
                     <b>Seriado dama</b>
                     <p>S/. 15</p>
                  </li>
                  <li>
                     <b>Seriado varón</b>
                     <p>S/. 15</p>
                  </li>
                  <li>
                     <b>Individual dama</b>
                     <p>S/. 20</p>
                  </li>
                  <li>
                     <b>Novel</b>
                     <p>S/. 30</p>
                  </li>
                  <li>
                     <b>Nacional</b>
                     <p>S/. 30</p>
                  </li>
               </ul>
            </div>
         )}
         {slugy == "pasion-trujillana-lima-2024" && (
            <div className="contenListaMod">
               <h2>Precios</h2>
               <ul>
                  <li>
                     <b>Seriado dama</b>
                     <p>S/. 20</p>
                  </li>
                  <li>
                     <b>Seriado varón</b>
                     <p>S/. 20</p>
                  </li>
                  <li>
                     <b>Individual dama</b>
                     <p>S/. 20</p>
                  </li>
                  <li>
                     <b>Individual varón</b>
                     <p>S/. 20</p>
                  </li>
                  <li>
                     <b>Novel Novel</b>
                     <p>S/. 30</p>
                  </li>
                  <li>
                     <b>Novel Abierto</b>
                     <p>S/. 30</p>
                  </li>
                  <li>
                     <b>Nacional</b>
                     <p>S/. 30</p>
                  </li>
                  <li>
                     <b>Cammpeón de campeones</b>
                     <p>S/. 30</p>
                  </li>
                  <li>
                     <b>La familia</b>
                     <p>S/. 00</p>
                  </li>
                  <li>
                     <b>La unidad</b>
                     <p>S/. 00</p>
                  </li>
               </ul>
            </div>
         )}

         {slugy == "anthony's-friends-lima-2024-2" && (
            <div className="contenInfoPago">
               <h2>Formas de pago</h2>
               <h3 className="FPnombre">A nombre de <span>Franco Trujillano</span></h3>

               <div>
                  <h3>Yape</h3>
                  <p>Número: 922 726 816</p>
               </div>
               <div>
                  <h3>Banco de Crédito del Perú</h3>
                  <p>Cuenta de Ahorros:19494999492079</p>
                  <p>CCI: 00219419499949207998.</p>
               </div>
            </div>
         )}
         {slugy == "caballero-de-los-mares-arequipa-2024" && (
            <div className="contenInfoPago">
               <h2>Formas de pago</h2>
               <h3 className="FPnombre">A nombre de <span>Luis Avalos</span></h3>
               {/* <div>
                  <h3>A nombre de:</h3>
                  <p>Luis Avalos</p>
               </div> */}
               <div>
                  <h3>Yape o Plin</h3>
                  <p>Número:  989 183 480</p>
               </div>
               <div>
                  <h3>Scotiabank</h3>
                  <p>Ahorros: 0060617263</p>
                  <p>CCI: 00909220006061726381</p>
               </div>
            </div>
         )}
         {slugy == "pasion-trujillana-lima-2024" && (
            <div className="contenInfoPago">
               <h2>Formas de pago</h2>
               <h3 className="FPnombre">A nombre de <span>Sebastián Bramón Saavedra</span></h3>
               <div>
                  <h3>Yape o Plin</h3>
                  <p>Número: 949 144 914</p>
               </div>
            </div>
         )}
      </div>
   );
};

export default FormasPago;
