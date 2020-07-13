import React from "react";
import "../styles/aboutUs.css";

const AboutUs = () => (
  <section id="Sobre-Nosotros">
    <div className="contenedor">
      <h3>Sobre Nosotros</h3>
      <div className="Contenedor-SobreNosotros">
        <div className="Frijol">
          <img src="Imagenes/SobreNos.jpg" alt="Foto de frijoles rojos" />
        </div>
        <div className="Texto">
          <p>
            Somos una pequeña empresa llamada frijoles doña carmen con muy poco
            tiempo de existencia en el mercado nos dedicamos al negocio de
            compra y venta de frijoles al por mayor.
          </p>
          <p>
            Nos aseguramos de brindar siempre el mejor producto con la mejor
            calidad posible para que nuestros clientes se sientan en un ambiente
            de confianza y satisfaccion con lo que compra.
          </p>
          <p>
            Puedes contactar con nosotros a travez de facebook,Correo
            electronico o completando el formulario que encontraras al final de
            nuestro sitio web.
          </p>
          <a href="#NuestrosProductos">Ver nuestros productos</a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
