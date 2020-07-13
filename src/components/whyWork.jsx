import React from "react";
import "../styles/whyWork.css";

const WhyWork = () => (
  <section id="PorqueTrabajar">
    <div className="contenedor">
      <h3>¿Porque trabajar con nosotros?</h3>
      <div className="ContenedorTrabajar">
        <div className="Item">
          <ul>
            <li>
              <img src="Imagenes/velocidad.png" alt="" />
            </li>
            <li>velocidad</li>
            <li>
              Nos aseguramos que tu producto sea entregado hasta el alcance de
              tu puerta en el menor tiempo posible, con el fin de brindar un
              nivel de satisfaccion y agrado en nuestros clientes.
            </li>
          </ul>
        </div>
        <div className="Item">
          <ul>
            <li>
              <img src="Imagenes/Dinero.png" alt="" />
            </li>
            <li>Dinero</li>
            <li>
              Nos aseguramos que tu producto sea de la mayor calidad posible que
              encuentres en el mercado y a la vez al mejor precio posible para
              que este al alcance de todos en nuestro pais.
            </li>
          </ul>
        </div>
        <div className="Item">
          <ul>
            <li>
              <img src="Imagenes/Apreton.png" alt="" />
            </li>
            <li>Confianza</li>
            <li>
              La confianza es un pilar fundamental en nustra empresa, por lo que
              nos aseguramos de mantener una relacion agradable y de contacto
              con nuestros clientes en todo momento.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WhyWork;
