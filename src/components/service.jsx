import React from "react";
import "../styles/service.css";

const Service = () => (
  <section id="Servicio">
    <div className="contenedor">
      <h3>Servicios</h3>
      <div className="Contenedor-Servicios">
        <div className="Servicio Violeta">
          <h4>Compra de frijol</h4>
          <p>
            Compramos frijoles con el objetivo de satisfacer la demanda de
            nuestros clientes y a la vez generar fuentes de ingreso para los
            granjeros de nuestro pais.
          </p>
          <img
            className="Icono"
            src="Imagenes/Compra.png"
            alt="icono de compra"
          />
          <img
            className="Ondas"
            src="Imagenes/waves.png"
            alt="imagen de waves"
          />
        </div>
        <div className="Servicio Celeste">
          <h4>Venta de frijol</h4>
          <p>
            Vendemos frijoles con el objetivo de satisfacer todas las
            necesidades y expectativas de nuestros clientes, ofreciendo un
            producto de calidad y al mejor precio del mercado.
          </p>
          <img
            className="Icono"
            src="Imagenes/Venta.png"
            alt="icono de venta"
          />
          <img
            className="Ondas"
            src="Imagenes/waves.png"
            alt="imagen de ondas"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Service;
